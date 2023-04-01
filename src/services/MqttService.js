import mqtt from "mqtt";
import db from "../models/index.js";
let client = null;
function connect() {
  client = mqtt.connect("mqtt://broker.hivemq.com");
}
function subscribe(topic) {
  client.subscribe(topic);
  client.on("message", async (topic, payload) => {
    switch (topic) {
      case "BK/PaintSystem/Configuration/toWeb":
        console.log(payload.toString());
        break;
      //await db.FinishedProduct.create(JSON.parse(payload.toString()))
      case "BK/PaintSystem/UaMessage/toWeb":
        console.log(payload.toString());
    }
  });
}
export default { connect, subscribe };
