const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    testTitle: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
    },
    testDate: {
      type: Date,
      required: true,
    },
    questions: [
      {
        question: {
          type: String,
        },
        options: {
          opt1: String,
          opt2: String,
          opt3: String,
          opt4: String,
        },
      },
    ],
  },
  { timestamps: true }
);

const testModel = new mongoose.model("test", testSchema);
module.exports = testModel;
