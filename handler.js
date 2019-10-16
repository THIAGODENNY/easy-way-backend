const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const keys = require("./config/keys");
var bodyParser = require('body-parser');
var getRawBody = require('raw-body')

mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json());

app.use(routes);

app.use(function (req, res, next) {
  getRawBody(req, {
    length: req.headers['content-length'],
    limit: '1mb',
    encoding: contentType.parse(req).parameters.charset
  }, function (err, string) {
    if (err) return next(err)
    req.text = string
    next()
  })
});

module.exports.handler = serverless(app);
