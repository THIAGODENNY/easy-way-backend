const express = require("express");
const EmailController = require("./controller/EmailController");

const routes = express.Router();

routes.post("/", EmailController.generateKey);

module.exports = routes;
