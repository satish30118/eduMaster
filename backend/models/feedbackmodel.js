const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    studentDetails: {
      name: String,
      email: String,
    },
    educatorName: {
        type: String,
        required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const feedbackModel = new mongoose.model("feedback", feedbackSchema);
module.exports = feedbackModel;
