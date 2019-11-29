const express = require("express");
const DoctorsController = require("./controllers/DoctorsController");
const routes = express.Router();

routes.get("/", DoctorsController.show);
routes.get("/showBySpecialty/:specialty", DoctorsController.showBySpecialty);

module.exports = routes;
