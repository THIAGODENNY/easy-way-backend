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

function verifyToken(req, res, next, profileAllowed) {

  // check header or url parameters or post parameters for token
  var token = req.headers['x-access-token'];
  console.log(token);
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

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

      if(!profileAllowed.includes(profile) && profile != "admin") {
        return res.status(500).send({ auth: false, message: 'Profile not Allowed.' });    
      }

      next(req, res);
    });
  });

}

module.exports = verifyToken;