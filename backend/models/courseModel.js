const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },
    courseCategory: {
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
    courseEducator: [
      {
        name: String,
        subject: String,
        expre: String,
      },
    ],
    courseStartDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const courseModel = new mongoose.model("course", courseSchema);
module.exports = courseModel;
