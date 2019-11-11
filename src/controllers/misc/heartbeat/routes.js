const express = require("express");
const UpdateUrl = require("./controller/UpdateUrl");

const routes = express.Router();

routes.post("/", UpdateUrl.updateUrl);

module.exports = routes;
