import mqtt from "mqtt";
import db from "../models/index.js";
let client = null;
function connect() {
  client = mqtt.connect("mqtt://broker.hivemq.com");
  client.on("message", async (topic, payload) => {
    console.log(payload.toString());
    console.log(topic);
    switch (topic) {
      case "BK/PaintSystem/CompleteMessage/toWeb":
        const FinishedProduct = JSON.parse(payload.toString());
        await db.FinishedProduct.create(FinishedProduct);
        break;
      case "BK/PaintSystem/UaMessage/toWeb":
        let Data = JSON.parse(payload.toString());

        if (Data.Name === "alarm") {
          const AlarmPoint = {
            NameAlarm: Data.Value,
            Status: false,
            DateTime: new Date(),
          };
          await db.AlarmPoint.create(AlarmPoint);
        }
        break;
    }
  });
}
function subscribe(topic) {
  client.subscribe(topic);
}
export default { connect, subscribe };
