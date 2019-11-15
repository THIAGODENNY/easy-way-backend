const express = require("express");
const SchedullingController = require('./schedulling/routes');
const RecordController = require('./record/routes');
const DoctorsController = require('./doctors/routes');
const PatientsController = require('./patients/routes');

const routes = express.Router();

routes.use('/schedulling', SchedullingController);
routes.use('/record', RecordController);
routes.use('/doctors', DoctorsController);
routes.use('/patients', PatientsController);

module.exports = routes;
