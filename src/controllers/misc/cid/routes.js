const express = require("express");
const CidController = require("./CidController");

const routes = express.Router();

routes.get("/", CidController.index);
routes.get("/:uid", CidController.show);

module.exports = routes;
