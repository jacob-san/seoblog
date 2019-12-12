const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required"),
  check("email")
    .isEmail()
    .withMessage("Must be a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 chars")
];

exports.userSigninValidator = [
  check("email")
    .isEmail()
    .withMessage("Must be a valid email"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("Password must have at least 6 chars")
];
