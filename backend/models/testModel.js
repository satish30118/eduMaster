const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    testTitle: {
      type: String,
      required: true,
      trim: true,
    },
    testCategory: {
      type: String,
      required: true,
    },
    testType: {
      type: String,
    },
    testDate: {
      type: String,
      required: true,
    },
    testTime: {
      type: String,
    },
    testMarks: {
      type: Number,
    },
  },
  { timestamps: true }
);

const testModel = new mongoose.model("test", testSchema);
module.exports = testModel;
