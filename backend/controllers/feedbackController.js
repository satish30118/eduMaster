const feedbackModel = require("../models/feedbackmodel");

const createFeedback = async (req, res) => {
  try {
    const { studentName, educatorId, courseTitle, feedback } = req.body;

    const newFeedback = await feedbackModel({
      studentName,
      educatorId,
      courseTitle,
      feedback,
    }).save();

    if (!newFeedback ) {
      res.status(400).send({
        success: false,
        message: "Feedback can't submitted",
      });
      return;
    }

    res.status(201).send({
      success: true,
      message: "Feedback submitted successfully ",
      newFeedback,
    });
  } catch (error) {
    console.log(error);
    res.status(422).send({
      success: false,
      message: "Server problem please try again",
    });
  }
};



/* GET  FEEDBACK BASED ON TEACHER ID*/
const teacherBasedFeedback = async (req, res) => {
  try {
    const { educatorId } = req.params;
    const teacherFeedback = await feedbackModel
      .find({ educatorId})
      .sort({ createdAt: -1 });

    if (!teacherFeedback) {
      res.status(400).send({
        success: false,
        message: "feedback can't get",
      });
      return;
    }
    res.status(200).send({
      success: true,
      message: "All feedback",
      teacherFeedback,
    });
  } catch (error) {
    console.log(`${error}`);
    res.status(500).send({
      success: false,
      message: "Server Problem, Please try again!",
    });
  }
};

/* Delete Feedback */
const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFeedback = await feedbackModel.findByIdAndDelete(id);
    if (deletedFeedback) {
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
  createFeedback,
  deleteFeedback,
  teacherBasedFeedback,
};
