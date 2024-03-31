const testModel = require("../models/testModel");

const createTest = async (req, res) => {
  try {
    const {
      testTitle,
      testCategory,
      testType,
      testDate,
      testTime,
      testMarks,
    } = req.body;

    const newTest = await testModel({
      testTitle,
      testCategory,
      testType,
      testDate,
      testTime,
      testMarks,
    }).save();

    if (!newTest) {
      res.status(400).send({
        success: false,
        message: "Test can't added",
      });
      return;
    }

    res.status(201).send({
      success: true,
      message: "Test added successfully ",
      newTest,
    });
  } catch (error) {
    console.log(error);
    res.status(422).send({
      success: false,
      message: "Server problem please try again",
    });
  }
};

/* UPDATE TEST */
const updateTest = async (req, res) => {
  try {
    const {
      testTitle,
      testCategory,
      testDate,
      testTime,
      testMarks,
      questions,
      test
    } = req.body;
    const { id } = req.params;
    const updatedTest = await testModel.findByIdAndUpdate(
      id,
      {
        testTitle,
        testCategory,
        subject,
        testDate,
        testTime,
        testMarks,
        questions,
      },
      { new: true }
    );

    if (updatedTest) {
      res.status(200).send({
        success: true,
        message: " updated Successfully",
        updatedTest,
      });
      return;
    }
    res.status(400).send({
      success: false,
      message: "Test can't updated",
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

/* GET ALL TESTS */
const getAllTest = async (req, res) => {
  try {
    const allTest = await testModel
      .find({})
      .sort({ testCategory: 1, createdAt: -1 });

    if (!allTest) {
      res.status(400).send({
        success: false,
        message: "Test can't get",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "All test details",
      allTest,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* GET  CATEGORY Based TEST */
const categoryBasedTest = async (req, res) => {
  try {
    const { cat } = req.params;
    const testCategory = await testModel
      .find({ testCategory: cat })
      .sort({ createdAt: -1 });

    if (!testCategory) {
      res.status(400).send({
        success: false,
        message: "test can't get",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "All test details",
      testCategory,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/*  GET SINGLE TEST DETAILS */
const getSingleTest = async (req, res) => {
  try {
    const { id } = req.params;
    const singleTest = await testModel.findById(id);

    if (!singleTest) {
      res.status(400).send({
        success: false,
        message: "Test course can't get",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "sigle test details",
      singleTest,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/*Delete single Test*/
const deleteTest = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTest = await testModel.findByIdAndDelete(id);
    if (deletedTest) {
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
  createTest,
  updateTest,
  getAllTest,
  getSingleTest,
  deleteTest,
  categoryBasedTest,
};
