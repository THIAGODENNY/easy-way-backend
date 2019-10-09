const cidFile = require("./cid.json");

module.exports = {
  async index(req, res) {
    return res.json(cidFile);
  }
};
