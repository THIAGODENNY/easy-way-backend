const express = require("express");
const RecordSchedullingController = require("./controllers/RecordSchedullingController");
const routes = express.Router();

routes.get("/schedullingsByPatientId/:id", RecordSchedullingController.showSchedullingsByPatientId);
routes.get("/schedullingsByMedicId/:id", RecordSchedullingController.showSchedullingsByMedicId);
routes.get("/showSchedullingsByMedicName/:name", RecordSchedullingController.showSchedullingsByMedicName);
routes.get("/schedullingsByDate/:id/:month/:year", RecordSchedullingController.showSchedullingsByMonthYear);
routes.get("/schedullingsByDate/:month/:year", RecordSchedullingController.showSchedullingsByMonthYear);
routes.get("/schedullingsByDates/:month/:year", RecordSchedullingController.showSchedullingsByMonthYears);
routes.get("/list", RecordSchedullingController.listIndex);
routes.get("/", RecordSchedullingController.index);
routes.get("/:id", RecordSchedullingController.show);
routes.post("/", RecordSchedullingController.store);
routes.put("/:id", RecordSchedullingController.update);
routes.delete("/:id", RecordSchedullingController.destroy);

module.exports = routes;
