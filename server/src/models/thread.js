const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const threadSchema = new mongoose.Schema({
  board: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Board'
  },
  text: {
    type: String,
    required: true
  },
  delete_password: {
    type: String,
    required: true
  },
  created_on: {
    type: Date,
    default: new Date()
  },
  bumped_on: {
    type: Date,
    default: new Date()
  },
  reported: {
    type: Boolean,
    default: false
  },
  replies: [{
    text: {
      type: String,
      required: true
    },
    delete_password: {
      type: String,
      required: true
    },
    created_on: {
      type: Date,
      default: new Date()
    },
    bumped_on: {
      type: Date,
      required: true
    },
    reported: {
      type: Boolean,
      default: false
    }
  }]
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = {
  Thread
};
