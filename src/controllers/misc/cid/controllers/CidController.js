const cidFile = require("./data/cid.json");

module.exports = {
  async index(req, res) {
    return res.json(cidFile);
  },
  async show(req, res) {
    const { uid } = req.params;
    return res.json(cidFile.filter(e => e.codigo === uid.toUpperCase()));
  }
};
