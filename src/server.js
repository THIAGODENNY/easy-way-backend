const serverless = require('serverless-http');
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

const MONGODB_URI = `mongodb://localhost:27017/prontuario`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

module.exports.handler = serverless(app);