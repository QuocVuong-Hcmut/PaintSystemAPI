import express from "express";
import controller from "../controller/authController.js";
const route = express.Router();
const routes = (app) => {
  route.post("/login", controller.handleLogin);
  route.post("/register", controller.handleRegister);
  route.put("/user/update/:id", controller.handleUpdate);
  route.get("/user/all", controller.getAllUser);
  route.post("/user/:id", controller.deleteUser);
  return app.use("/auth", route);
};
export default routes;
