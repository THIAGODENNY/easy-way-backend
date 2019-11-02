const express = require("express");
const SchedullingController = require('./schedulling/routes')

const routes = express.Router();

routes.use('/schedulling', SchedullingController);

module.exports = routes;
