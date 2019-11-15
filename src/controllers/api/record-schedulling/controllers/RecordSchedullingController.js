const Record = require("../../record/model/Record");
const Schedule = require("../../schedulling/model/Schedulling")
const circularJson = require("circular-json")

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
  }
};
