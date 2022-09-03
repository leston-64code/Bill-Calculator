const ErrorHandler = require("../utils/Errorhandler");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { name, email, password } = await req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
    });

    if (user) {
      res.status(200).json({
        success: true,
        token: "fjasiufyaiufbisaufbisaufyn",
        user,
      });
    } else {
      return next(new ErrorHandler("User could not be created", 500));
    }
  } catch (error) {
    console.log(error)
    return next(new ErrorHandler(error.message, error.code));
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = await req.body;

  try {
    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user) {
      return next(new ErrorHandler("Please check your credentials", 500));
    }

    if (password == user.password) {
      return res.status(200).json({
        success: true,
        token: "fjasiufyaiufbisaufbisaufyn",
        user,
      });
    } else {
      return next(new ErrorHandler("Please check your password", 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, error.code || 500));
  }
};
