const Schedulling = require("../model/Schedulling");

module.exports = {
  async index(req, res) {
    const schedulling = await Schedulling.find({});
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
  }
};