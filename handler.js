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
  .catch(error => { throw error });

const errorHandling = (err, req, res, next) => {
  res.status(500).json({
    errors: [{ message: 'An internal server error has occurred.' }],
    error: err
  });
};

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

app.use(errorHandling);

module.exports.handler = serverless(app);
