import * as dotenv from "dotenv";
import db from "../models/index.js";
import { createAccessToken } from "../middleware/jwtAction.js";
dotenv.config();
let secret = process.env.SECRET_ENV;
let handleLogin = async (req, res) => {
  try {
    let user = await db.User.findOne({
      where: { userName: req.body.UserName },
    });
    if (!user) {
      return res.status(404).json("Not Found!");
    } else {
      if (req.body.Password != user.Password)
        return res.status(404).json("Wrong Password!");
      let accessToken = createAccessToken(
        {
          UserName: user.UserName,
          Admin: user.Admin,
        },
        secret
      );
      let { password, ...others } = user.dataValues;
      return res.status(200).json({
        ...others,
        accessToken,
      });
    }
  } catch (e) {
    return res.status(500).json(e);
  }
};
let handleRegister = async (req, res) => {
  try {
    try {
      const user = await req.body;
      await db.User.create(user);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(500).json(e);
    }
  } catch (e) {
    return res.status(500).json(e);
  }
};
let handleUpdate = async (req, res) => {
  try {
    const user = await db.User.findOne({ where: { id: req.params.id } });
    user.set({
      ...req.body,
    });
    await user.save();
    return res.status(200).json("Update Success");
  } catch (e) {
    return res.status(500).json(e);
  }
};
let getAllUser = async (req, res) => {
  try {
    const listUser = await db.User.findAll();
    if (!listUser) return res.status(404).json("Not Found!");
    return res.status(200).json(listUser);
  } catch (e) {
    return res.status(500).json("Looix adjhcb");
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
  handleUpdate,
  getAllUser,
  deleteUser,
};
