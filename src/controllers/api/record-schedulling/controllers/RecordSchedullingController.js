const Record = require("../../record/model/Record");
const Schedule = require("../../schedulling/model/Schedulling")
const Circularjson = require("circular-json")

module.exports = {
  async showSchedullingsByRecordId(req, res) {
    const { id } = req.params;
    const record = await Record.findOne({_id: id});
    console.log(record);
    return res.json(
      {
        result: await schedules(record)
      }
    );
      // return res.json(schedules);
    // let schedules = [];
    // await record.schedules.forEach(async element => {
    //   await Schedule.findById(element, schedule => schedules.push(schedule));
    //   console.log(element);
    // });
    // await console.log(schedules);
    // return res.json(record.schedules);
    
    
    // console.log();
    // const { id } = req.params;
    // const record = await Record.findOne({_id: id});
    // let ids = [];
    // let schedules = [];
    // record.schedules.forEach(id => ids.push(id));
    
    // await ids.forEach(async i => await schedules.push(await Schedule.findOne({_id: i})));
    // console.log("schedules"+schedules);
    // console.log("ids"+ids);
    // return res.json(schedules);
  }
//,
//   async setRecordNews(req, res){
//       const { id } = req.params;
//       const record = await Record.findOne({_id: id});
      
//   }
};


async function schedules(record){
  await record.schedules.map(async e => {
    console.log(await Schedule.find({_id: e}))
    const schedule = await Schedule.findOne({_id: e});
    return schedule;
  })
}