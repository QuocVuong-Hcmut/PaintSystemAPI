import * as dotenv from "dotenv";
import db from "../models/index.js";

dotenv.config();
let secret = process.env.SECRET_ENV;
let getAllAlarm = async (req, res) => {
  try {
    let listAllAlarm = await db.AlarmPoint.findAll();
    return res.status(200).json(listAllAlarm);
  } catch (e) {
    return res.status(500).json(e);
  }
};
let getCurrentAlarm = async (req, res) => {
  try {
    let listAllAlarm = await db.AlarmPoint.findAndCountAll();
    let listAlarm = await db.AlarmPoint.findAndCountAll({
      offset: listAllAlarm.count - 4,
      limit: 4,
    });
    return res.status(200).json(listAlarm.rows);
  } catch (e) {
    return res.status(500).json(e);
  }
};
let getAlarmsWithTime = async (req, res) => {
  const starttime = new Date(req.query.starttime);
  const endTime = new Date(req.query.endtime);
  try {
    let listAllAlarm = await db.AlarmPoint.findAll();
    let listAlarm = [];
    for (const item of listAllAlarm) {
      console.log("date", item.DateTime);
      let DateTime = new Date(item.DateTime);
      if (DateTime >= starttime && DateTime <= endTime) listAlarm.push(item);
    }
    return res.status(200).json(listAlarm);
  } catch (e) {
    return res.status(500).json(e);
  }
};
let updateStatusAlarm = async (req, res) => {
  try {
    //const Alarm = await db.AlarmPoint.findOne({ where: { id: req.params.id } });
    const Alarm = await db.AlarmPoint.findOne({ where: { id: req.params.id } });
    Alarm.set({
      Status: true,
    });
    await Alarm.save();
    return res.status(200).json("Update Success");
  } catch (e) {
    return res.status(500).json(e);
  }
};
let postAlarm = async (req, res) => {
  try {
    const AlarmPoint = await req.body;
    await db.AlarmPoint.create(AlarmPoint);
    return res.status(200).json(AlarmPoint);
  } catch (e) {
    return res.status(500).json(e);
  }
};
export default {
  getAllAlarm,
  getAlarmsWithTime,
  updateStatusAlarm,
  postAlarm,
  getCurrentAlarm,
};
