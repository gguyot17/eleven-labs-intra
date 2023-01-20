const mongoose = require("mongoose");

const Astronaut = mongoose.model(
  "Astronaut",
  new mongoose.Schema({
    lastName: String,
    firstName: String,
  })
);

module.exports = Astronaut;
