const Schedulling = require("../model/Schedulling");

module.exports = {
  async index(req, res) {
    const schedulling = await Schedulling.find({});
    return res.json(schedulling);
  },
  async show(req, res) {
    const { uid } = req.params;
    const schedulling = await Schedulling.findOne({_id: uid});
    return res.json(schedulling);
  },
  async store(req, res) {
    const { specialty, patient, medic, date } = req.body;

    const schedulling = await Schedulling.create({
      specialty: specialty,
      patient: patient,
      medic: medic,
      date: date
    });

    return res.json(schedulling);
  },
  async destroy(req, res) {
    const { uid } = req.params;
    console.log(req.params);
    Schedulling.findByIdAndRemove({_id: uid}, function(error) {
      if(error) return res.json(error);
      
      return res.json({id: uid});     
    });
  },
  async update(req, res) {
    const { uid } = req.params;
    const schedulling = {
      specialty: req.body.specialty,
      patient: req.body.patient,
      medic: req.body.medic,
      date: req.body.date
    }
    //adiciona uma notificação no usuario
    Schedulling.findByIdAndUpdate({_id: uid}, schedulling, {new: true}, function(error, model) {
      if(error) return res.json(error);
      return res.json(model);
    });
  }
};
