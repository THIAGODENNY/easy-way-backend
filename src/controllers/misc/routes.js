const express = require("express");
const cid = require("./cid/routes");
const sms = require("./sms/routes")

const routes = express.Router();

routes.use("/cid", cid);
routes.use("/sms", sms);

module.exports = routes;
