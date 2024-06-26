import express from "express";
import controller from "../controller/reportController.js";
import { verifyAccessToken } from "../middleware/jwtAction.js";
const route = express.Router();
const routes = (app) => {
  route.get("/time", controller.getPreReport);
  route.post("/", controller.postReport);
  route.get("/oee", controller.getOEE);

  return app.use("/report", route);
};
export default routes;
