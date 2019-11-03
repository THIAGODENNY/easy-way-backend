const Record = require("../model/Record");

module.exports = {
  async index(req, res) {
    const record = await Record.find({});
    return res.json(record);
  },
  async show(req, res) {
    const { id } = req.params;
    const record = await Record.findOne({_id: id});
    return res.json(record);
  },
  async store(req, res) {
    const { status,patient,cids,schedules,symptoms,diagnosis,medicNotes,prescription } = req.body;

    const record = await Record.create({
        status: status,
        patient: patient,
        cids: cids,
        schedules: schedules,
        symptoms: symptoms,
        diagnosis: diagnosis,
        medicNotes: medicNotes,
        prescription: prescription
    });

    return res.json(record);
  },
  async destroy(req, res) {
    const { id } = req.params;
    console.log(req.params);
    Record.findByIdAndRemove({_id: id}, function(error) {
      if(error) return res.json(error);
      
      return res.json({id: id});
    });
  },
  async update(req, res) {
    const { id } = req.params;
    const record = {
        status: req.body.status,
        patient: req.body.patient,
        cids: req.body.cids,
        schedules: req.body.schedules,
        symptoms: req.body.symptoms,
        diagnosis: req.body.diagnosis,
        medicNotes: req.body.medicNotes,
        prescription: req.body.prescription
    }
    Record.findByIdAndUpdate({_id: id}, record, {new: true}, function(error, model) {
      if(error) return res.json(error);
      return res.json(model);
    });
  }
};
