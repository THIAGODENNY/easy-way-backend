var mongoose = require('mongoose');  

var RecordSchedullingScheema = new mongoose.Schema({  
  specialty: String,
  patient: String,
  medic: String,
  date: String,
  news: Boolean,

  status: String,
  cids: Array,
  symptoms: Array,
  diagnosis: String,
  medicNotes: String,
  prescription: Array
});

module.exports = mongoose.model('RecordSchedulling', RecordSchedullingScheema);