const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
    },
    coursePrice: {
      type: Number,
      required: true,
    },
    courseDuration: {
      type: String,
      required: true,
    },
    courseInstructor: {
        type: String,
        required: true,
      },
    courseStartDate: {
      type: Date,
      required: true,
    },
 
  },
  { timestamps: true }
);

const courseModel = new mongoose.model("course", courseSchema);
module.exports = courseModel;
