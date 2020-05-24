const mongoose = require("mongoose");

const Test = mongoose.Schema({
  self: {
    type: String,
    required: true,
    unique: true,
  },
  firstmorpheme: {
    type: String,
    default: "Djinn",
    enum: ["Djinn", "Win"],
  },
  secondmorpheme: {
    type: String,
    default: "dex",
    enum: ["dex"],
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("test", Test);
