const express = require("express");
const HelloWorldController = require("./controllers/HelloWorldController");
const misc = require("./controllers/misc/routes");
const auth = require("./controllers/auth/routes");
const api = require("./controllers/api/routes");

const twoFactorAuth = require("./controllers/auth/auth/TwoFactorAuth");

const routes = express.Router();

routes.get("/hello", (req, res) => twoFactorAuth(req, res, HelloWorldController.index, ["medic"]));
routes.use("/misc", misc);
routes.use("/auth", auth);
routes.use("/api", api);

module.exports = routes;
