const express = require("express");
const DoctorsController = require("./controllers/DoctorsController");
const routes = express.Router();

routes.get("/", DoctorsController.show);

module.exports = routes;
