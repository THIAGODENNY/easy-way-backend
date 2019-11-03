const express = require("express");
const RecordController = require("./controllers/RecordController");
const routes = express.Router();

routes.get("/", RecordController.index);
routes.get("/:id", RecordController.show);
routes.put("/:id", RecordController.update);
routes.post("/", RecordController.store);
routes.delete("/:id", RecordController.destroy);

module.exports = routes;
