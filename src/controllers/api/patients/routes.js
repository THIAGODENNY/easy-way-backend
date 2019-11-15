const express = require("express");
const PatientController = require("./controllers/PatientController");
const routes = express.Router();

routes.get("/", PatientController.show);

module.exports = routes;
