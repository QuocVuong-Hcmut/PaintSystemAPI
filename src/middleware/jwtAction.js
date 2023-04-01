import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { token } from "morgan";
dotenv.config();
const secret = process.env.SECRET_ENV;
function createAccessToken(data, secret) {
  let token = jwt.sign(data, secret, { expiresIn: "10h" });
  return token;
}
function verifyAccessToken(req, res, next) {
  console.log("Header", req.headers);
  let accessToken = req.headers.authorization.split(" ")[1];
  console.log(accessToken);
  console.log(secret);
  if (!accessToken) return res.status(403).json("You are't authentication!");
  jwt.verify(accessToken, secret, function (err, inforUser) {
    if (err) return res.status(404).json("Access Token not accept!");
    if (inforUser) {
      console.log(inforUser);
      req.user = inforUser;
      next();
    }
  });
}
module.exports = {
  createAccessToken,
  verifyAccessToken,
};
