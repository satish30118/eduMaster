const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const userVerification = async (req, res, next) => {
  const KEY = process.env.JWT_SECRET_KEY;
  try {
    const decode = jwt.verify(req.headers.authorization, KEY);
    req.user = decode;
    next();
  } catch (error) {
    console.log(`ERROR IN AUTHMIDDLEWARE:- ${error}`);
  }
};

//ADMIN VERIFICATION
const adminVerification = async (req, res, next) => {
  try {
    const user = await userModel.findOne({ _id: req.user._id });
    if (!user.isEducator) {
      res.status(401).send({
        message: "Not an Educator",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(`ERROR IN ADMIN AUTHMIDDLEWARE:- ${error}`);
    res.status(401).send({
      success: false,
      error: "error in admin middleware",
    });
  }
};

module.exports = { userVerification, adminVerification };
