const express = require("express");
const HeartBeatLogController = require("./controllers/HeartBeatLogController");
const routes = express.Router();

routes.post("/", HeartBeatLogController.store);
routes.get("/:id", HeartBeatLogController.show);

module.exports = routes;
