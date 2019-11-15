const Users = require("../../../auth/user/User");

module.exports = {
  async index(req, res) {

  },
  async show(req, res) {
    console.log('ok');
    const doctors = await Users.find({'profile': 'medic'});
    console.log(doctors);
    return res.json(doctors.map((e) => {
      return {
        specialty: e.specialty,
        name: e.name,
        profile: e.profile,
        email: e.email
      }
    } 
    ));
  },
  async store(req, res) {

  },
  async destroy(req, res) {

  },
  async update(req, res) {
    
  }
};
