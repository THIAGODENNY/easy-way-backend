var mongoose = require('mongoose');  

var RecordSchema = new mongoose.Schema({
  status: String,
  patient: String,
  cids: Array,
  schedules: Array,
  symptoms: Array,
  diagnosis: String,
  medicNotes: String,
  prescription: Array,
  news: Boolean
});

module.exports = mongoose.model('Record', RecordSchema);