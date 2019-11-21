const HeartBeatLog = require("../model/HeartBeatLog");
const User = require("../../../auth/user/User");

module.exports = {
  async index(req, res) {
  },

  async show(req, res) {
    const { id } = req.params;
    const { limit } = req.query;
    const heartBeatLog = await HeartBeatLog.find({pid: id}).limit(parseInt(limit)).sort({date:-1});
    return res.json(heartBeatLog);
  },

  async store(req, res) {
    const { heartbeat, url } = req.body;
    User.find({ url: url }, async function(err, user) {
      if (!user) return res.status(404).send({ auth: false, message: "No user found." });
      console.log(user[0].id);
      const heartBeatLog = await HeartBeatLog.create({
        pid: user[0].id,
        date: new Date(),
        heartbeat: heartbeat,
        url: url
      });     
      return res.json(heartBeatLog);
    });
  },

  async destroy(req, res) {
  },

  async update(req, res) {
  }
};
