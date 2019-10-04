const express = require('express');

const HelloController = require('./controllers/HelloControllers');

const routes = express.Router();

routes.get('/hello', HelloController.index);

module.exports = routes;