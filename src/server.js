import configViewEngine from "./config/viewengine.js";
import express from "express";
import * as dotenv from "dotenv";
import createHttpError from "http-errors";
import morgan from "morgan";
import cors from "cors";
const OS = require("os");
import cookieParser from "cookie-parser";
const app = express();
const http = require("http");
import authRoute from "./route/authRoute.js";
import productRoute from "./route/productRoute.js";
import alarmRoute from "./route/alarmRoute.js";
import finishedproductRoute from "./route/finishedproductRoute.js";
import reportRoute from "./route/reportRoute.js";
import mqtt from "./services/MqttService.js";
import passport from "passport";
import hpp from "hpp";
const LocalStrategy = require("passport-local").Strategy;
import session from "express-session";
require("express-async-errors");
const GOOGLE_CLIENT_ID =
  "32668285401-7oi17oag7kj0dg3ht8ebjdrarc5gbddv.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
var GoogleStrategy = require("passport-google-oauth20").Strategy;
dotenv.config();
process.env.UV_THREADPOOL_SIZE = OS.cpus().length - 3;

app.use(
  cors({
    origin: "http://localhost:3000",
    secure: false,
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const store = session.MemoryStore();
app.use(hpp());
app.use(
  session({
    saveUninitialized: false,
    secret: "l",
    cookie: {
      maxAge: 1000 * 20, // 10s
    },
    store,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
const port = process.env.PORT || 3002;

//Router
authRoute(app);
productRoute(app);
alarmRoute(app);
finishedproductRoute(app);
reportRoute(app);

// app.post("/loginpass", passport.authenticate("local"), (req, res) => {
//   console.log("ré");
//   return res.status(200).json(req.body);
// });
// const user = {
//   username: "123",
//   password: "123",
// };
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile, accessToken, refreshToken);
      done(null, profile);
    }
  )
);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3001/login",
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(res.user);
    console.log("re");
    res.redirect("http://localhost:3000/login");
  }
);

// passport.use(
//   new LocalStrategy((username, password, done) => {
//     console.log(`username:::${username}, pass::::${password}`);
//     console.log("In Local");
//     if (username === user.username && password === user.password) {
//       return done(null, {
//         username,
//         password,
//         active: true,
//       });
//     }
//     done(null, false);
//   })
// );
passport.serializeUser(function (user, done) {
  console.log("In serializeUser");
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  console.log("In deserializeUser");
  done(null, user);
});
app.use((req, res, next) => {
  return next(
    createHttpError.NotFound(`Not Found Router ${req.originalUrl} on sever`)
  );
});
app.use((err, req, res, next) => {
  console.log("Lôi", err);
  return res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message,
  });
});
mqtt.connect();
mqtt.subscribe("BK/PaintSystem/UaMessage/toWeb");
mqtt.subscribe("BK/PaintSystem/Configuration/toWeb");
mqtt.subscribe("BK/PaintSystem/CompleteMessage/toWeb");
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
