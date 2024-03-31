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
      type: Number,
      required: true,
    },
    courseEducator:{
      type: String,
    },
    courseStartDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const courseModel = new mongoose.model("course", courseSchema);
module.exports = courseModel;
