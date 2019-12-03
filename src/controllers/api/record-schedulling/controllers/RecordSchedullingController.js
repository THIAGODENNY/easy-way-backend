const Record = require("../../record/model/Record");
const Schedule = require("../../schedulling/model/Schedulling");
const RecordSchedule = require("../model/RecordSchedulling");
const moment = require('moment');

module.exports = {
  async index (req, res) {
    return res.json(
      await RecordSchedule.find({})
    );
  },
  async show (req, res){
    const { id } = req.params;
    return res.json({ "schedules": 
      await RecordSchedule.findOne({
        "_id": id
      })
    }
    );
  },
  async store (req, res) {
    const {
      specialty, patient, medic, date, news, status, cids,
      symptoms, diagnosis, medicNotes, prescription } = req.body;

    const recordschedule = await RecordSchedule.create({
      specialty: specialty,
      patient: patient,
      medic: medic,
      date: date,
      news: news,
      status: status,
      cids: cids,
      symptoms: symptoms,
      diagnosis: diagnosis,
      medicNotes: medicNotes,
      prescription: prescription
    });
    return res.json(recordschedule);
  },
  async update (req, res) {
    const { id } = req.params;
    const recordschedule = {
      specialty, patient, medic, date, news, status, cids,
      symptoms, diagnosis, medicNotes, prescription } = req.body;
    //adiciona uma notificação no usuario
    RecordSchedule.findByIdAndUpdate({_id: id}, recordschedule, {new: true}, function(error, model) {
      if(error) return res.json(error);
      return res.json(model);
    });
  },
  async destroy (req, res) {
    const { id } = req.params;
    RecordSchedule.findByIdAndRemove({_id: id}, function(error) {
      if(error) return res.json(error);
      return res.json({id: id});     
    });
  },
  async showSchedullingsByPatientId(req, res) {
    const { id } = req.params;
    return res.json(
      await RecordSchedule.find({
        'patient': id
      })
    );
  },
  async showSchedullingsByMedicId(req, res) {
    const { id } = req.params;
    return res.json(
      await RecordSchedule.find({
        'medic': id
      })
    );
  },
  async showSchedullingsByMonthYear(req, res) {
    const { id , month, year } = req.params;
    if (id){
      try{
      return res.json(
        await RecordSchedule.find({
          'patient': id,
          'date': {
            "$regex": month+"/"+year, 
            "$options": "i"
          }
        })
      );}
      catch{return res.json({ "message": "Record not found!"})}
    }
    return res.json(
      await RecordSchedule.find({
        'date': {
          "$regex": month+"/"+year, 
          "$options": "i"
        }
      })
    )
  },
  // async showRecordSchedulesByMonthYear(req, res) {
  //   const { id, month, year } = req.params;

  //   if(id) {
  //     try{
  //       return res.json({"schedules":
  //         await Schedule.find({
  //           '_id': id,
  //           'date': {
  //             "$regex": month+"/"+year, 
  //             "$options": "i"
  //           }
  //         })}
  //       );}
  //       catch{return res.json({ "message": "Record not found!"})}
  //   }

  // },
  async showSchedullingsByMonthYears(req, res) {
    const { id , month, year } = req.params;
    if (id){
      try{
      return res.json({"schedules":
        await RecordSchedule.find({
          '_id': id,
          'date': {
            "$regex": month+"/"+year, 
            "$options": "i"
          }
        })}
      );}
      catch{return res.json({ "message": "Record not found!"})}
    }
    return res.json({"schedules":
        (await RecordSchedule.find({
          'date': {
            "$regex": month+"/"+year, 
            "$options": "i"
          }
        }))
        .sort((a , b) => {
          a = moment(a.date, ['HH:mm DD/MM/YYYY']).format();
          b = moment(b.date, ['HH:mm DD/MM/YYYY']).format();
          return a > b ? -1 : a < b ? 1 : 0;
        })
      }
    )
  }
};
