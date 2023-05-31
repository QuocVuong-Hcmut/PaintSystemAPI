import express from "express";
import controller from "../controller/authController.js";
import {
  verifyAccessToken,
  verifyRefreshToken,
} from "../middleware/jwtAction.js";
const route = express.Router();
const routes = (app) => {
  route.post("/login", controller.handleLogin);
  route.post("/register", controller.handleRegister);
  route.post("/logout/:id", controller.handleLogout);
  route.post(
    "/refreshtoken",
    verifyRefreshToken,
    controller.handleRefreshToken
  );
  route.put("/user/update/:id", controller.handleUpdate);
  route.get("/user/all", controller.getAllUser);
  route.get("/user/page", controller.getPageUser);
  route.post("/user/:id", controller.deleteUser);
  return app.use("/auth", route);
  np;
};
export default routes;
