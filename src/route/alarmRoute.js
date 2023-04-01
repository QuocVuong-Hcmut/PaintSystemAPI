import express from "express";
import controller from "../controller/alarmController";
import { verifyAccessToken } from "../middleware/jwtAction.js";
const route = express.Router();
const routes = (app) => {
  route.get("/all", verifyAccessToken, controller.getAllAlarm);
  route.get("/time", verifyAccessToken, controller.getAlarmsWithTime);
  route.put("/:id", verifyAccessToken, controller.updateStatusAlarm);
  route.post("/", verifyAccessToken, controller.postAlarm);
  return app.use("/alarm", route);
};
export default routes;
