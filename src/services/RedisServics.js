const redis = require("redis");

const redisClient = redis.createClient({
  url: "redis://default:vuBJtoz5oDOAClWeUXruM0aVRd0mCTrz@redis-11916.c1.ap-southeast-1-1.ec2.cloud.redislabs.com:11916",
});
redisClient.on("connect", () => console.error(`connected`));
redisClient.on("error", (error) => console.error(`Error : ${error}`));

(async function Conect() {
  await redisClient.connect();
})();
const setRedisAsync = (key, value) => {
  try {
    return new Promise((isOK, isError) => {
      redisClient.set(key, value, (er, rs) => {
        console.log("err", er);
        return er ? isError(er) : isOK(rs);
      });
      isOK("1");
    });
  } catch (err) {}
};
const getRedisAsync = (key, value) => {
  try {
    return new Promise((isOK, isError) => {
      redisClient.get(key, (er, rs) => {
        return er ? isError(er) : isOK(rs);
      });
    });
  } catch (err) {}
};
const delRedisAsync = (key, value) => {
  try {
    return new Promise((isOK, isError) => {
      redisClient.del(key, (er, rs) => {
        return er ? isError(er) : isOK(rs);
      });
    });
  } catch (err) {}
};
module.exports = { setRedisAsync, getRedisAsync, delRedisAsync };
