const express = require("express");
const HelloWorldController = require("./controllers/HelloWorldController");
const misc = require("./controllers/misc/routes");

const routes = express.Router();

routes.get("/hello", HelloWorldController.index);
routes.use("/misc", misc);

module.exports = routes;
