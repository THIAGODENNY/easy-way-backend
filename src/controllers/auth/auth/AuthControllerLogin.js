var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('./VerifyToken');
var ReturnToken = require('./ReturnToken');

const keys = require('../../../../config/keys');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.SENDGRID_API_KEY);

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var User = require('../user/User');

/**
 * Configure JWT
 */
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcryptjs');
var config = require('../../../../config/keys'); // get config file

router.post('/login', function(req, res) {

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    
    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    // return the information including token as JSON
    res.status(200).send({ auth: true, token: token });
  });

});

router.post('/reset', function(req, res) {

  const { newpassword, renewpassword} = req.body;

  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    
    // check if the password is valid
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

    if (newpassword !== renewpassword) return res.status(401).send({auth: false, token: null, message: "password doesn't match"});

    var hashedPassword = bcrypt.hashSync(newpassword, 8);

    User.findOneAndUpdate({ email: req.body.email }, { password: hashedPassword }, function(err, user) {
      console.log(user)
    })
    // if user is found and password is valid
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    // return the information including token as JSON
    res.status(200).send({ auth: true, token: token });
  });

});

router.post('/resetpassword', async function(req, res) {
  console.log(`ok`);
  const key = (Math.floor(Math.random() * 90000) + 10000).toString();
  const hashedPassword = bcrypt.hashSync(key, 8);

  await User.findOneAndUpdate({ email: req.body.email }, { password: hashedPassword }, function(err, user) {
    console.log(user);
    if(!user) return res.status(401).send({message: 'Email not registered'});
    const msg = {
      to: user.email,
      from: 'no-reply@vidasaudavel.com',
      subject: 'Reset de Senha',
      text: `Sua nova senha : ${key}`,
      html: `<strong>Sua nova senha: ${key}</strong>`,
    };
    sgMail.send(msg);
    return res.status(200).send({ message: `Email sent to ${user.email}` });
  });
});

router.post('/register', function(req, res) {
  const { profile } = req.body;
  if(profile && profile != 'patient') return res.status(500).send({ message: 'Only patient profile is allowed'})

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);

  User.create({
    name : req.body.name,
    email : req.body.email,
    password : hashedPassword,
    profile: 'patient',
    cpf: req.body.cpf,
    record: req.body.record
  }, 
  function (err, user) {
    if (err) return res.status(500).send({message: err});

    // if user is registered without errors
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });

    res.status(200).send({ auth: true, token: token });
  });

});


router.get('/logout', function(req, res) {
  res.status(200).send({ auth: false, token: null });
});

router.get('/me', (req, res) => {
  ReturnToken(req, res);
});

module.exports = router;