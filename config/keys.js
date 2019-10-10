if (process.env.PROD == "true") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}
