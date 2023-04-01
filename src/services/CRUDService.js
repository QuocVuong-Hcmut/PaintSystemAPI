import db from "../models/index.js";
import bcrypt from "bcryptjs";
var salt = bcrypt.genSaltSync(10);
const createUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPass = await bcrypt.hashSync(data.password, salt);
      await db.User.create({
        fullName: data.FullName,
        password: hashPass,
        gender: data.gender === "1" ? true : false,
        age: data.age,
        address: data.address,
        phoneNumber: data.phoneNumber,
        roleId: data.roleId,
      });
      resolve();
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
const displayUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { id: [data] } });
      await user.save();
      resolve(user);
    } catch (e) {
      console.log(e);
      reject(e);
    }
  });
};
module.exports = { createUser, displayUser };
