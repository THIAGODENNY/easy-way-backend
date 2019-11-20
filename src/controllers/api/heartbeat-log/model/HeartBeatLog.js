var mongoose = require('mongoose');  

var HeartBeatLogSchema = new mongoose.Schema({  
  pid: String,
  heartbeat: String,
  date: String,
  url: String
});

module.exports = mongoose.model('HeartBeatLog', HeartBeatLogSchema);