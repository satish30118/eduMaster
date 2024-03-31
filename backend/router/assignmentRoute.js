const express = require('express');
const { userVerification, adminVerification } = require('../middleware/authMiddleware');
const { createAssignment, getAllAssignment } = require('../controllers/assignmentController');



//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post("/add-new-assignment", userVerification, adminVerification, createAssignment);
router.get("/get-all-assignment", userVerification, getAllAssignment);

module.exports = router;