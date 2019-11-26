const Record = require("../../record/model/Record");
const Schedule = require("../../schedulling/model/Schedulling");
const moment = require('moment');

module.exports = {
  async showSchedullingsByRecordId(req, res) {
    const { id } = req.params;
    const record = await Record.findOne({_id: id});
    return res.json(
      await Schedule.find({
        '_id': { 
          $in: record.schedules
        }
      })
    );
  },
  async showSchedullingsByMonthYear(req, res) {
    const { id , month, year } = req.params;
    if (id){
      try{
      const record = await Record.findOne({ _id: id });
      return res.json(
        await Schedule.find({
          '_id': {
            $in: record.schedules
          },
          'date': {
            "$regex": month+"/"+year, 
            "$options": "i"
          }
        })
      );}
      catch{return res.json({ "message": "Record not found!"})}
    }
    return res.json(
      await Schedule.find({
        'date': {
          "$regex": month+"/"+year, 
          "$options": "i"
        }
      })
    )
  },
  async showSchedullingsByMonthYears(req, res) {
    const { id , month, year } = req.params;
    if (id){
      try{
      const record = await Record.findOne({ _id: id });
      return res.json({"schedules":
        await Schedule.find({
          '_id': {
            $in: record.schedules
          },
          'date': {
            "$regex": month+"/"+year, 
            "$options": "i"
          }
        })
        .sort((a , b) => {
          a = moment(a.date, ['HH:mm DD/MM/YYYY']).format;
          b = moment(b.date, ['HH:mm DD/MM/YYYY']).format;
          return a > b ? -1 : a < b ? 1 : 0;
        })
      });
    }
      catch{return res.json({ "message": "Record not found!"})}
    }
    return res.json({"schedules":
      await Schedule.find({
        'date': {
          "$regex": month+"/"+year, 
          "$options": "i"
        }
      })}
    )
  }
};
