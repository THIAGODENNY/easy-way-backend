var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: {type: String, unique : true, required : true },
  password: String,
  profile: String,
  cpf: {type: String, unique: true},
  url: String
});
module.exports = mongoose.model('User', UserSchema);