const Users = require("../../../auth/user/User");

module.exports = {
  async index(req, res) {

  },
  async show(req, res) {
    console.log('ok');
    const patients = await Users.find({'profile': 'patient'});
    console.log(patients);
    return res.json(patients.map((e) => {
      return {
        id: e.id,
        name: e.name,
        email: e.email,
        profile: e.profile,        
        specialty: e.specialty,
        url: e.url,
        cpf: e.cpf
      }
    } 
    ));
  },
  async showByCPF(req, res) {
    const { cpf } = req.params;
    const patient = await Users.find({'profile': 'patient'});
    return res.json(await patient.find({'cpf': cpf}));
  },
  async showByName (req, res) {
    const { name } = req.params;
    const patient = await Users.find({'profile': 'patient'});
    return res.json(await patient.find({'name': name}));
  },
  async store(req, res) {

  },
  async destroy(req, res) {

  },
  async update(req, res) {
    
  }
};
