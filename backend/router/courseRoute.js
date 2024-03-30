const express = require('express');
const { userVerification, adminVerification } = require('../middleware/authMiddleware');
const { createCourse, getAllCourse, getSingleCourse, categoryBasedCourse, updateCourse, deleteCourse } = require('../controllers/courseController');


//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post("/add-new-course", userVerification, adminVerification, createCourse);
router.get("/get-all-course", userVerification, getAllCourse);
router.get("/get-single-course/:id", userVerification, getSingleCourse);
router.get("/get-category-base-course/:cat", userVerification, categoryBasedCourse);
router.put("/update-course/:id", userVerification, adminVerification, updateCourse);
router.delete("/delete-course/:id", userVerification, adminVerification, deleteCourse);
