const cidFile = require("./data/cid.json");
const Fuse = require("fuse.js");

module.exports = {
  async index(req, res) {
    return res.json(cidFile);
  },
  async show(req, res) {
    const { uid } = req.params;
    return res.json(cidFile.filter(e => e.codigo === uid.toUpperCase()));
  },
  async keyword(req, res) {
    var options = {
      includeScore: true,
      shouldSort: true,
      threshold: 0.8,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["codigo", "nome"]
    };
    var fuse = new Fuse(cidFile, options);
    const { uid } = req.params;
    return res.json(fuse.search(uid).filter((e) => e.score < 0.2));
  }
};
