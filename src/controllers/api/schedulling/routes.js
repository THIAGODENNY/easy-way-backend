const express = require("express");
const SchedullingController = require("./controllers/SchedullingController");
const routes = express.Router();

routes.get('/', SchedullingController.index);
routes.post('/', SchedullingController.store);

module.exports = routes;
