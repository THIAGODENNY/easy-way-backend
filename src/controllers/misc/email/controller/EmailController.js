const keys = require('../../../../../config/keys');
const config = require('../../../../../config/keys');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(keys.SENDGRID_API_KEY);
const User = require('../../../auth/user/User');

module.exports = {
    async generateKey(req, res) {
        var token = req.headers['x-access-token'];
        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        const key = Math.floor(Math.random() * 90000) + 10000;

        await getUser(req, res, token, key, (user) => {
            const msg = {
                to: user.email,
                from: 'no-reply@vidasaudavel.com',
                subject: 'Código de Verificação',
                text: `Seu Código de Verificação: ${key}`,
                html: `<strong>Seu Código de Verificação: ${key}</strong>`,
            };
            sgMail.send(msg);
            return res.status(200).send({ message: `Email sent to ${user.email}` });
        });
    }
}

async function getUser(req, res, token, key, next) {
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        if (!decoded) {
            return res.status(404).send({ auth: false, message: 'Token not Valid' });
        }

        // if everything is good, save to request for use in other routes
        req.userId = decoded.id;
        User.findById(req.userId, function (err, user) {
            User.findByIdAndUpdate(user.id, { key: key }, { new: true }, function (err, user) {
                if (err) return res.status(500).send("There was a problem updating the user.");
            });
            if (!user) return res.status(404).send({ auth: false, message: "No user found." });
            console.log(user);
            next(user);
        });
    });
}