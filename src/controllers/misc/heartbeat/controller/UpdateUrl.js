const config = require('../../../../../config/keys');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('../../../auth/user/User');

module.exports = {
    async updateUrl(req, res) {
        var token = req.headers['x-access-token'];
        if (!token)
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        const { url } = req.body;
        await getUser(req, res, token, url, (user) => {
            return res.status(200).send(user);
        });
    }
}

async function getUser(req, res, token, url, next) {
    jwt.verify(token, config.secret, function (err, decoded) {
        if (err)
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        if (!decoded) {
            return res.status(404).send({ auth: false, message: 'Token not Valid' });
        }

        // if everything is good, save to request for use in other routes
        req.userId = decoded.id;
        User.findById(req.userId, function (err, user) {
            User.findByIdAndUpdate(user.id, { url: url }, { new: true }, function (err, user) {
                if (err) return res.status(500).send("There was a problem updating the user.");
            });
            if (!user) return res.status(404).send({ auth: false, message: "No user found." });
            console.log(user);
            next(user);
        });
    });
}