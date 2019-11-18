const config = require('../../../../../config/keys');
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('../../../auth/user/User');

module.exports = {
    async updateUrl(req, res) {
        const { id } = req.body;
        if (!id)
            return res.status(403).send({ auth: false, message: 'No id provided.' });
        const { url } = req.body;
        await getUser(req, res, id, url, (user) => {
            return res.status(200).send(user);
        });
    }
}

async function getUser(req, res, id, url, next) {       
        User.findById(id, function (err, user) {
            User.findByIdAndUpdate(user.id, { url: url }, { new: true }, function (err, user) {
                if (err) return res.status(500).send("There was a problem updating the user.");
            });
            if (!user) return res.status(404).send({ auth: false, message: "No user found." });
            console.log(user);
            next(user);
        });
}