const ErrorHandler = require("../utils/Errorhandler");
const User = require("../models/User");
const sendToken = require("../utils/sendToken");

exports.register = async (req, res, next) => {
  const { name, email, password , companyname,companyaddress, companyphone,companyemail} = await req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      companyaddress,
      companyname,
      companyphone,
      companyemail
    });

    if (user) {
  
      sendToken(user,200,res)
    } else {
      return next(new ErrorHandler("User could not be created", 500));
    }
  } catch (error) {
    console.log(error);
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
    } else {
      let isMatched = await user.matchPasswords(password);
      if (!isMatched) {
        return next(new ErrorHandler("Please check your password", 500));
      } else {
            sendToken(user,201,res)
      }
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, error.code || 500));
  }
};
