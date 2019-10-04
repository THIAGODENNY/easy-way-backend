const serverless = require("serverless-http");
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const keys = require("./config/keys");

const app = express();

const MONGODB_URI = keys.MONGODB_URI;

// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

app.use(express.json());
app.use(routes);

module.exports.handler = serverless(app);
