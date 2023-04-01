import configViewEngine from "./config/viewengine.js";
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
const app = express();
const http = require("http");
import authRoute from "./route/authRoute.js";
import productRoute from "./route/productRoute.js";
import alarmRoute from "./route/alarmRoute.js";
import finishedproductRoute from "./route/finishedproductRoute.js";
import reportRoute from "./route/reportRoute.js";
import mqtt from "./services/MqttService.js";
dotenv.config();
app.use(
  cors({
    origin: "*",
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3002;
//Router
authRoute(app);
productRoute(app);
alarmRoute(app);
finishedproductRoute(app);
reportRoute(app);
mqtt.connect();
mqtt.subscribe("BK/PaintSystem/Configuration/toWeb");
mqtt.subscribe("BK/PaintSystem/UaMessage/toWeb");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
