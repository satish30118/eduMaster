const assignmentModel = require("../models/assignmentModel");

const createAssignment = async (req, res) => {
    try {
      const {
        assTitle, assCategory, assDeadline, assQuestion, assType,
      } = req.body;
  
      const newAssignment = await assignmentModel({
        assTitle, assCategory, assDeadline, assQuestion, assType
      }).save();
  
      if (!newAssignment ) {
        res.status(400).send({
          success: false,
          message: "Assignment can't added",
        });
        return;
      }
  
      res.status(201).send({
        success: true,
        message: "Assignment added successfully ",
        newAssignment ,
      });
    } catch (error) {
      console.log(error);
      res.status(422).send({
        success: false,
        message: "Server problem please try again",
      });
    }
  };
  
  /* GET ALL ASSIGNMENT */
const getAllAssignment = async (req, res) => {
    try {
      const allAssignment = await assignmentModel
        .find({})
        .sort({ assCategory: 1, createdAt: -1 });
  
      if (!allAssignment) {
        res.status(400).send({
          success: false,
          message: "Assignments can't get",
        });
        return;
      }
      res.status(200).send({
        success: true,
        message: "All assignments details",
        allAssignment,
      });
    } catch (error) {
      console.log(`${error}`);
      res.status(500).send({
        success: false,
        message: "Server Problem, Please try again!",
      });
    }
  };

  module.exports = {createAssignment, getAllAssignment}