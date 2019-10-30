const express = require("express");
const HelloWorldController = require("./controllers/HelloWorldController");
const misc = require("./controllers/misc/routes");
const auth = require("./controllers/auth/routes");

const verifyToken = require("./controllers/auth/auth/VerifyToken");

const routes = express.Router();

//routes.get("/hello", (req, res) => verifyToken(req, res, HelloWorldController.index));
routes.get("/hello", HelloWorldController.index);
routes.use("/misc", misc);
routes.use("/auth", auth);

module.exports = routes;
