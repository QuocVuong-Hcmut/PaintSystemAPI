import jwt from "jsonwebtoken";
import { redisClient } from "../services/RedisServics";
import * as dotenv from "dotenv";
import { token } from "morgan";
import createHttpError from "http-errors";

dotenv.config();
let KeyAccessToken = process.env.KeyAccessToken;
let KeyRefreshToken = process.env.KeyRefreshToken;
function createToken(data, key, expiresIn) {
  let token = jwt.sign(data, key, { expiresIn: expiresIn });
  return token;
}
function verifyAccessToken(req, res, next) {
  if (!req.headers.authorization)
    throw createHttpError.Unauthorized("Unauthorized");
  const accessToken = req.headers.authorization.split(" ")[1];
  jwt.verify(accessToken, KeyAccessToken, function (err, inforUser) {
    if (err) throw createHttpError.Unauthorized(err.message);
    if (inforUser) {
      req.user = inforUser;
      next();
    }
  });
}
function verifyRefreshToken(req, res, next) {
  if (!req.cookies.refreshtoken)
    throw createHttpError.Unauthorized("Unauthorized");
  const refreshtokenToken = req.cookies.refreshtoken;
  jwt.verify(
    refreshtokenToken,
    KeyRefreshToken,
    async function (err, inforUser) {
      if (err) throw createHttpError.Unauthorized(err.message);
      if (inforUser) {
        req.user = inforUser;
        const value = await redisClient.get(inforUser.id.toString());
        console.log("re", refreshtokenToken);
        console.log("redis", value);
        if (!value || refreshtokenToken !== value || value != refreshtokenToken)
          throw createHttpError.Unauthorized("RefreshToken invalid!");
        next();
      }
    }
  );
}
module.exports = {
  createToken,
  verifyAccessToken,
  verifyRefreshToken,
};
