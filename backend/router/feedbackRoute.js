const express = require("express");
const {
  userVerification,
  adminVerification,
} = require("../middleware/authMiddleware");
const {
  createFeedback,
  deleteFeedback,
  teacherBasedFeedback,
} = require("../controllers/feedbackController");

//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post("/add-new-feedback", userVerification, createFeedback);
router.get(
  "/get-teacher-base-feedback/:educatorId",
  userVerification,
  adminVerification,
  teacherBasedFeedback
);
router.delete(
  "/delete-test/:id",
  userVerification,
  adminVerification,
  deleteFeedback
);
