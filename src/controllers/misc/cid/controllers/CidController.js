const cidFile = require("./data/cid.json");
const Fuse = require("fuse.js");

module.exports = {
  async index(req, res) {
    return res.json(cidFile);
  },
  async show(req, res) {
    const { id, keywords } = req.body;

    if(!id && !keywords) {
      return res.json({"message": "No id or keywords in body"});
    }

    if(id) {
      return res.json(cidFile.filter(e => e.codigo === id.toUpperCase()));
    }

    if(keywords) {
      return findByKeyword(req, res);
    }
  }
};

const findByKeyword = (req, res) => {
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
    const { keywords } = req.body;
    return res.json(fuse.search(keywords).filter((e) => e.score < 0.2));
}
