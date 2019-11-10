var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../../../../config/keys'); // get our config file
var User = require('../user/User');

/**
 * [This function verify the permission and runs a function]
 * @param  {[type]} req
 * @param  {[type]} res
 * @param  {[type]} next
 * @param  {[type]} profiles
 */

function twoFactorAuth(req, res, next, profileAllowed) {

  // check header or url parameters or post parameters for token
  var token = req.headers['x-access-token'];
  var twoAuthKey = req.headers['two-auth-key'];

  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  if (!twoAuthKey) 
    return res.status(403).send({ auth: false, message: 'No key provided.' });

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });    

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    User.findById(req.userId, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");

      const { profile } = user;
      const { key } = user;

      if(key != twoAuthKey) {
        return res.status(403).send({ auth: false, message: 'Key not valid.' });    
      }

      if(!profileAllowed.includes(profile) && profile != "admin") {
        return res.status(500).send({ auth: false, message: 'Profile not Allowed.' });    
      }

      const newKey = Math.floor(Math.random() * 90000) + 10000;
      User.findByIdAndUpdate(user.id, { key: newKey }, { new: true }, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
      });

      next(req, res);
    });
  });

}

module.exports = twoFactorAuth;