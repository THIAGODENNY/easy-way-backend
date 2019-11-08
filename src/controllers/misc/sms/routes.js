const express = require("express");
const SmsController = require("./controller/SmsController");

const routes = express.Router();

routes.get("/", SmsController.index);

module.exports = routes;
