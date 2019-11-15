const express = require("express");
const SchedullingController = require('./schedulling/routes')
const RecordController = require('./record/routes')
const RecordSchedullingController = require('./record-schedulling/routes')

const routes = express.Router();

routes.use('/schedulling', SchedullingController);
routes.use('/record', RecordController);
routes.use('/screcord', RecordSchedullingController)

module.exports = routes;
