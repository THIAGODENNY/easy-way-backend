const express = require("express");
const CidController = require("./CidController");

const routes = express.Router();

routes.get("/", CidController.index);

module.exports = routes;
