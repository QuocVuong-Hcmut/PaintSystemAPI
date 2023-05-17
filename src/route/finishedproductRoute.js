import express from "express";
import controller from "../controller/finishedproductController.js";
import { verifyAccessToken } from "../middleware/jwtAction.js";
const route = express.Router();
const routes = (app) => {
  route.get("/all", controller.getAllFinishedProduct);
  route.get("/time", controller.getFinishedProductByTime);
  route.get("/:idproduct", controller.getFinishedProductByIdProduct);
  return app.use("/finishedproduct", route);
};
export default routes;
