const express = require("express");
const SmsController = require("./controller/SmsController");

const routes = express.Router();

routes.post("/", SmsController.generateKey);

module.exports = routes;
