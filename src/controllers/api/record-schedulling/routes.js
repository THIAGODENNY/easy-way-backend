const express = require("express");
const RecordSchedullingController = require("./controllers/RecordSchedullingController");
const routes = express.Router();

routes.get("/schedullingsByRecordId/:id", RecordSchedullingController.showSchedullingsByRecordId);
routes.get("/schedullingsByDate/:id/:month/:year", RecordSchedullingController.showSchedullingsByMonthYear);
routes.get("/schedullingsByDate/:month/:year", RecordSchedullingController.showSchedullingsByMonthYear);
routes.get("/schedullingsByDates/:month/:year", RecordSchedullingController.showSchedullingsByMonthYears);
routes.get("/", RecordSchedullingController.index);
routes.post("/", RecordSchedullingController.store);
routes.put("/:id", RecordSchedullingController.update);
routes.delete("/:id", RecordSchedullingController.destroy);

module.exports = routes;
