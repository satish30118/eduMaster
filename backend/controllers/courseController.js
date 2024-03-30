const courseModel = require("../models/courseModel");

const createCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseCategory,
      coursePrice,
      courseDuration,
      courseEducator,
      courseStartDate,
    } = req.body;

    const newCourse = await courseModel({
      courseName,
      courseCategory,
      coursePrice,
      courseDuration,
      courseEducator,
      courseStartDate,
    }).save();

    if (!newCourse) {
      res.status(400).send({
        success: false,
        message: "Course can't added",
      });
      return;
    }

    res.status(201).send({
      success: true,
      message: "Course added successfully ",
      newCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(422).send({
      success: false,
      message: "Server problem please try again",
    });
  }
};

/* UPDATE COURSE */
const updateCourse = async (req, res) => {
  try {
    const {
      courseName,
      courseCategory,
      coursePrice,
      courseDuration,
      courseEducator,
      courseStartDate,
    } = req.body;
    const { id } = req.params;
    const updatedCourse = await courseModel.findByIdAndUpdate(
      id,
      {
        courseName,
        courseCategory,
        coursePrice,
        courseDuration,
        courseEducator,
        courseStartDate,
      },
      { new: true }
    );

    if (updatedCourse) {
      res.status(200).send({
        success: true,
        message: " updated Successfully",
        updatedCourse,
      });
      return;
    }
    res.status(400).send({
      success: false,
      message: "Course can't updated",
    });
    return;
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* GET ALL COURSES */
const getAllCourse = async (req, res) => {
  try {
    const allCourse = await courseModel
      .find({})
      .sort({ courseCategory: 1, createdAt: -1 });

    if (!allCourse) {
      res.status(400).send({
        success: false,
        message: "Course can't get",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "All course details",
      allCourse,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* GET  CATEGORY Based COURSES */
const categoryBasedCourse = async (req, res) => {
    try {
        const {cat} = req.params;
      const courseCategory = await courseModel
        .find({courseCategory : cat})
        .sort({createdAt: -1 });
  
      if (!courseCategory) {
        res.status(400).send({
          success: false,
          message: "Course can't get",
        });
        return;
      }
      res.status(200).send({
        success: true,
        message: "All course details",
        courseCategory,
      });
    } catch (error) {
      console.log(`${error}`);
      res.status(500).send({
        success: false,
        message: "Server Problem, Please try again!",
      });
    }
  };

/*  GET SINGLE COURSE DETAILS */
const getSingleCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const singleCourse = await courseModel.findById(id);

    if (!singleCourse) {
      res.status(400).send({
        success: false,
        message: "Course can't get",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "sigle course details",
      singleCourse,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/*Delete single Booking*/
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCourse = await courseModel.findByIdAndDelete(id);
    if (deletedCourse) {
      res.status(200).send({
        success: true,
        message: "deleted successfully",
      });
      return;
    }
    res.status(400).send({
      success: false,
      message: "can't deleted",
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

module.exports = {
  createCourse,
  updateCourse,
  getAllCourse,
  getSingleCourse,
  deleteCourse,
  categoryBasedCourse
};
