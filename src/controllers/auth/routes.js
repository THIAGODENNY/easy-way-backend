var express = require('express');
var routes = express.Router();
var verifyToken = require('./auth/VerifyToken');

global.__root   = __dirname + '/'; 

routes.get('/', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
routes.use('/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
routes.use('/jwt/admin', (req, res) => verifyToken(req, res, AuthController, "admin"));
var AuthControllerLogin = require(__root + 'auth/AuthControllerLogin');
routes.use('/jwt', AuthControllerLogin);

module.exports = routes;