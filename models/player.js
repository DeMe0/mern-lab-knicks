// import mongoose
const mongoose = require("mongoose");

// Pull Schema and model from Mongoose
const Schema = mongoose.Schema;
const model = mongoose.model;

// Create Place Schema
const playerSchema = new Schema({
  name: { type: String, require: true },
  position: { type: String, require: true },
  img: { type: String, require: true },
});

// create our model object
const Player = model("Player", playerSchema);

// export our model object
module.exports = Player;
