const mongoose = require("mongoose");
const { threadSchema } = require("./thread");

const boardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  created_on: { type: Date, default: new Date() },
  threads: [
    {
      type: threadSchema,
    },
  ],
});

module.exports = mongoose.model("Thread", boardSchema);
