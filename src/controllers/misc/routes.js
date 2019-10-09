const express = require("express");
const cid = require("./cid/routes");

const routes = express.Router();

routes.use("/cid", cid);

module.exports = routes;
