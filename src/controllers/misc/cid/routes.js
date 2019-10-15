const express = require("express");
const CidController = require("./controllers/CidController");

const routes = express.Router();

routes.get("/", CidController.index);
routes.get("/:uid", CidController.show);
routes.get("/keywords/:uid", CidController.keyword);

module.exports = routes;
