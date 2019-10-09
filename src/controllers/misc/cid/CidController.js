const cidFile = require("./cid.json");

module.exports = {
  async index(req, res) {
    return res.json(cidFile);
  },
  async show(req, res) {
    return res.json(
      cidFile.filter(e => e.codigo === req.params.uid.toUpperCase())
    );
  }
};
