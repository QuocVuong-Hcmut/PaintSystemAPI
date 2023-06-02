import * as dotenv from "dotenv";
import SendEmail from "../utils/email.js";
import db from "../models/index.js";
import { createToken } from "../middleware/jwtAction.js";
import createHttpError from "http-errors";
import {
  delRedisAsync,
  getRedisAsync,
  setRedisAsync,
} from "../services/RedisServics.js";
import bcrypt, { genSalt } from "bcrypt";
import catchAsync from "../utils/catchError.js";
dotenv.config();
let KeyAccessToken = process.env.KeyAccessToken;
let KeyRefreshToken = process.env.KeyRefreshToken;
let saltRound = process.env.SALTROUND;
let handleLogin = async (req, res, next) => {
  try {
    console.log(1);
    //SendEmail();
    if (!req.body.UserName || !req.body.Password)
      throw createHttpError.BadRequest("Password or Username is empty");
    let user = await db.User.findOne({
      where: { UserName: req.body.UserName },
    });
    console.log("user", user);
    if (!user) {
      throw createHttpError.NotFound("Username is'n exist!");
    } else {
      console.log(req.body.Password, user.Password);
      if (req.body.Password != user.Password)
        throw createHttpError.NotFound("Password wrong!");

      // if (bcrypt.compareSync(req.body.Password, user.Password))
      //   throw createHttpError.NotFound("Password wrong!");
      let accessToken = createToken(
        {
          id: user.id,
          UserName: user.UserName,
          Admin: user.Admin,
        },
        KeyAccessToken,
        60 * 60 * 24 * 365
      );
      let refreshToken = createToken(
        {
          id: user.id,
          UserName: user.UserName,
          Admin: user.Admin,
        },
        KeyRefreshToken,
        "24h"
      );

      await setRedisAsync(user.id.toString(), refreshToken);
      //redisClient.set(user.id.toString(), refreshToken);
      // res.setHeader("Access-Control-Allow-Credentials", true);
      // res.setHeader("Access-Control-Allow-Origin", true);
      res.cookie("refreshtoken", refreshToken, {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      let { Password, ...others } = user;
      return res.status(200).json({
        ...others,
        accessToken,
      });
    }
  } catch (e) {
    return next(e);
  }
};
let handleRefreshToken = async (req, res, next) => {
  try {
    let user = await db.User.findOne({
      where: { userName: req.user.UserName },
    });
    if (!user) {
      throw createHttpError.NotFound("Username is'n exist!");
    } else {
      let accessToken = createToken(
        {
          id: user.id,
          UserName: user.UserName,
          Admin: user.Admin,
        },
        KeyAccessToken,
        25
      );

      let { password, ...others } = user.dataValues;
      return res.status(200).json({
        ...others,
        accessToken,
      });
    }
  } catch (e) {
    return next(e);
  }
};
let handleLogout = async (req, res) => {
  try {
    const userId = req.params.id;
    await delRedisAsync(userId.toString());
    // redisClient.del(userid.toString());
    return res.status(200).json("success");
  } catch (e) {
    return next(e);
  }
};

let handleRegister = catchAsync(async (req, res, next) => {
  const user = await req.body;
  console.log("register", Object.values(user).length === 0);
  if (Object.values(user).length === 0)
    throw createHttpError.BadRequest("No data user register!");
  //   bcrypt.genSalt(saltRound, function(err, salt) {
  //     bcrypt.hash(user.password, salt,async function (err, hash) {
  //         user.password = password;
  //         await db.User.create(user);
  //         return res.status(200).json(user);
  //     });
  // });
  if (user.hasOwnProperty("accessToken")) delete user.accessToken;
  if (user.hasOwnProperty("Id")) delete user.Id;
  await db.User.create(user);
  return res.status(200).json(user);
});
let handleUpdate = catchAsync(async (req, res) => {
  const user = await db.User.findOne({ where: { id: req.params.id } });
  console.log(JSON.stringify(req.body));
  user.set({
    ...req.body,
  });
  await user.save();
  return res.status(200).json("Update Success");
});
let getAllUser = async (req, res) => {
  try {
    const listUser = await db.User.findAll();
    if (!listUser) return res.status(404).json("Not Found!");
    return res.status(200).json(listUser);
  } catch (e) {
    return res.status(500).json("Lỗi server");
  }
};
let getPageUser = async (req, res) => {
  try {
    const page = req.query.page * 1;
    const pagesize = req.query.pagesize * 1;

    const offset = page * pagesize;
    const limit = pagesize;
    const data = await db.User.findAndCountAll({
      offset,
      limit,
    });
    return res.status(200).json(data);
  } catch (e) {
    return res.status(500).json(e);
  }
};

let deleteUser = async (req, res) => {
  try {
    await db.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json("success");
  } catch (e) {
    return res.status(500).json(e);
  }
};
export default {
  handleLogin,
  handleRegister,
  handleRefreshToken,
  handleUpdate,
  getAllUser,
  deleteUser,
  getPageUser,
  handleLogout,
};
