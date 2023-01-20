const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.astronaut = require("./astronaut.model");

module.exports = db;
