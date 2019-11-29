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
          id: e.id,
          name: e.name,
          email: e.email,
          profile: e.profile,        
          specialty: e.specialty
        }
      } 
    ));
  },
  async store(req, res) {

  },
  async destroy(req, res) {

  },
  async update(req, res) {
    
  },
  async showBySpecialty(req, res){
    const { specialty } = req.params;
    return res.json({"result": 
      doctors.find({
        "specialty": specialty
      })
    });
  }
};
