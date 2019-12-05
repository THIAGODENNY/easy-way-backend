const express = require("express");
const PatientController = require("./controllers/PatientController");
const routes = express.Router();

routes.get("/", PatientController.show);
routes.get("/showByCPF/:cpf", PatientController.showByCPF);
routes.get("/showByName/:name", PatientController.showByName);
routes.get("/:id", PatientController.showByID);

module.exports = routes;
