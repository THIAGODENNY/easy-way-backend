const HeartBeatLog = require("../model/HeartBeatLog");
const User = require("../../../auth/user/User");
const moment = require('moment');

module.exports = {
  async index(req, res) {
  },

  async show(req, res) {
    const { id } = req.params;
    const { limit, graph } = req.query;
    const heartBeatLog = await HeartBeatLog.find({pid: id})
                                    .limit(parseInt(limit))
                                    .sort({date:-1});
    if(graph) {
     return returnGraph(res, heartBeatLog.reverse());
    }
    return res.json({
      id: heartBeatLog.id,
      pid: heartBeatLog.pid,
      date: heartBeatLog.date,
      heartbeat: heartBeat.heartbeat,
      url: heartBeatLog.url,
      brdate: moment(heartBeatLog.date, ['DD:MM:YYYY']).format()
    });
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

function returnGraph(res, heartBeatLog) {
  const dates = heartBeatLog.map(() => '"|"');
  const heartBeat = heartBeatLog.map(e => e.heartbeat);

  const url = `https://quickchart.io/chart?width=500&height=300&c={type:'line',data: {labels: [${dates.join(',')}],datasets: [{label: 'Heart Beat',data: [${heartBeat}]}]}}`;

  return res.redirect(url);
}
