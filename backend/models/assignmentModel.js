const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    assTitle: {
      type: String,
      required: true,
      trim: true,
    },
    assCategory: {
      type: String,
      required: true,
    },
    assDeadline: {
      type: String,
      required: true,
    },
    assQuestion: {
      type: Number,
      required: true,
    },
    assType:{
      type: String,
    },
    
  },
  { timestamps: true }
);

const assignmentModel = new mongoose.model("assignment", assignmentSchema);
module.exports = assignmentModel;
