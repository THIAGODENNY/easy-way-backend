var mongoose = require('mongoose');  

var SchedullingSchema = new mongoose.Schema({  
  specialty: String,
  patient: String,
  medic: String,
  date: String,
  news: Boolean
});

module.exports = mongoose.model('Schedulling', SchedullingSchema);