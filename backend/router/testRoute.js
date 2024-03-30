const express = require('express');
const { userVerification, adminVerification } = require('../middleware/authMiddleware');
const { createTest, getAllTest, getSingleTest, updateTest, deleteTest, categoryBasedTest } = require('../controllers/testController');


//ROUTER OBJECT
const router = express.Router();

//ROUTING
router.post("/add-new-test", userVerification, adminVerification, createTest);
router.get("/get-all-test", userVerification, getAllTest);
router.get("/get-single-test/:id", userVerification, getSingleTest);
router.get("/get-category-base-test/:cat", userVerification, categoryBasedTest);
router.put("/update-test/:id", userVerification, adminVerification, updateTest);
router.delete("/delete-test/:id", userVerification, adminVerification, deleteTest);
