const express = require("express");
const SchedullingController = require('./schedulling/routes')
const RecordController = require('./record/routes')

const routes = express.Router();

routes.use('/schedulling', SchedullingController);
routes.use('/record', RecordController);

module.exports = routes;
