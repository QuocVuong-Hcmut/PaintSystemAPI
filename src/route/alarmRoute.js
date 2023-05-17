import express from "express";
import controller from "../controller/alarmController";
import { verifyAccessToken } from "../middleware/jwtAction.js";
const route = express.Router();
const routes = (app) => {
  route.get("/all", controller.getAllAlarm);
  route.get("/current", controller.getCurrentAlarm);
  route.get("/time", controller.getAlarmsWithTime);
  route.put("/:id", controller.updateStatusAlarm);
  route.post("/", controller.postAlarm);
  return app.use("/alarm", route);
};
export default routes;
