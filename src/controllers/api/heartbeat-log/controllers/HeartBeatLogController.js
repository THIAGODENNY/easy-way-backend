const HeartBeatLog = require("../model/HeartBeatLog");
const User = require("../../../auth/user/User");
const axios = require("axios");

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
      const dates = heartBeatLog.map(e => '"' + new Date(e.date).toISOString().toString() + '"');
      const heartBeat = heartBeatLog.map(e => e.heartbeat);

      const url = `https://quickchart.io/chart?width=500&height=300&c={type:'line',data: {labels: [${dates.join(',')}],datasets: [{label: 'Heart Beat',data: [${heartBeat}]}]}}`;
      const url1 = "https://jsonplaceholder.typicode.com/todos/1";
      const config = {
        method: 'GET',
        headers: {
          "Content-Type": 'text/plain'
        },
        url: url
      }
      return res.json(await axios(config)
        .then(function (response) {
          return { result: {image: response.data}};
        })
        .catch(function (error) {
          return { result: {image: error }};
        }));
    }
    return res.json({result: heartBeatLog});
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
      return res.json({result: heartBeatLog});
    });
  },

  async destroy(req, res) {
  },

  async update(req, res) {
  }
};
