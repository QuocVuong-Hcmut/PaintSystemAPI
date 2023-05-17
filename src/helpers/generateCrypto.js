import CryptoJS from "crypto-js";
var accessKey = CryptoJS.AES.encrypt("my message", "secret key 123").toString();
var refreshKey = CryptoJS.AES.encrypt(
  "my message",
  "secret key 123"
).toString();
console.log(accessKey);
console.log(refreshKey);
