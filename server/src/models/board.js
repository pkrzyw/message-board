const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: new Date(),
  },
  bumped_on: {
    type: Date,
    required: true,
    default: new Date(),
  },
  threads: [
    {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Thread",
    },
  ],
});

const Board = mongoose.model("Board", boardSchema);

module.exports = {
  Board,
};
