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
  },
  async destroy(req, res) {
    const { id } = req.params;
    console.log(req.params);
    await Schedulling.find({ _id: id })
      .remove()
      .exec();

    return res.json({ message: "ok" });
  }
};
