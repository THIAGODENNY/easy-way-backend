var express = require('express');
var routes = express.Router();

global.__root   = __dirname + '/'; 

routes.get('/', function (req, res) {
  res.status(200).send('API works.');
});

var UserController = require(__root + 'user/UserController');
routes.use('/users', UserController);

var AuthController = require(__root + 'auth/AuthController');
routes.use('/jwt', AuthController);

module.exports = routes;