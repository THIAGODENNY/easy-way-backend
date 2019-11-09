const keys = require('../../../../../config/keys');
const accountSid = keys.SMS_ACCOUNTSID;
const authToken = keys.SMS_AUTHTOKEN;
const from = keys.SMS_PHONE;
const client = require('twilio')(accountSid, authToken);

module.exports = {
    async generateKey (req, res){
        let key = Math.floor(Math.random() * 90000) + 10000;
        const { phone } = req.body;
        const message = 'Your key from Vida Saudável : ' + key;
        client.messages
            .create({body: message, from: 'whatsapp:' + from, to: 'whatsapp:' + phone})
            .then(message => console.log(message.sid, message));
        return res.send({message: 'sent to ' + phone});
    }    
}