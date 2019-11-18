const express = require("express");
const RecordSchedullingController = require("./controllers/RecordSchedullingController");
const routes = express.Router();

routes.get("/schedullingsByRecordId/:id", RecordSchedullingController.showSchedullingsByRecordId);
routes.get("/schedullingsByDate/:id/:month/:year", RecordSchedullingController.showSchedullingsByMonthYear);
routes.get("/schedullingsByDate/:month/:year", RecordSchedullingController.showSchedullingsByMonthYear);
// routes.get("/:id", RecordController.show);
// routes.put("/:id", RecordController.update);
// routes.post("/", RecordController.store);
// routes.delete("/:id", RecordController.destroy);

module.exports = routes;
