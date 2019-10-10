const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const keys = require("./config/keys");

mongoose
  .connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(error => console.log(error));

const app = express();

app.use(routes);

module.exports.handler = serverless(app);
