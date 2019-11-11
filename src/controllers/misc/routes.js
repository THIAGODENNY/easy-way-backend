const express = require("express");
const cid = require("./cid/routes");
const email = require("./email/routes");
const heartbeat = require("./heartbeat/routes");

const routes = express.Router();

routes.use("/cid", cid);
routes.use("/email", email);
routes.use("/heartbeat", heartbeat);

module.exports = routes;
