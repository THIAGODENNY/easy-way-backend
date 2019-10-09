const express = require("express");
const HelloWorldController = require("./controllers/HelloWorldController");

const routes = express.Router();

routes.get("/hello", HelloWorldController.index);

module.exports = routes;
