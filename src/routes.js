const express = require('express');

const HelloController = require('./controllers/HelloControllers');

const routes = express.Router();

routes.get('/', HelloController.index);

module.exports = routes;