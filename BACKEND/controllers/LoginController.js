const User = require("../models/User");
const uploadImage = require("../utils/uploadCloudinary.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

//Login Functionality

const LoginController = async (req, res) => {
  console.log(req.body);

  try {
    const { username, password } = req.body;
    // based on the username the user is fetched
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(200)
        .json({ isSuccess: false, error: "User not found" });
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      console.log("Passwords Dont Match!");
      return res.status(200).json({isSuccess:false, error:"Password is InCorrect"}); // Passwords match
    }

    const token =jwt.sign({ username: user.username, id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h', 
    });
    return res
      .status(200)
      .json({ isSuccess: true, msg: "You logged in successfully", user, token });
  } catch (error) {
     
    return res
      .status(200)
      .json({ error: "The Process failed , please try again" });
  }
};


//Signup Functionality
const SignController = async (req, res) => {
  console.log(req.body);

  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    console.log(existingUser);
    if (existingUser) {
      return res
        .status(200)
        .json({ isSuccess: false, error: "User already exists" });
    }
    const avatarURL = await uploadImage(req.file?.path);
    console.log(avatarURL);

    // Create a new user

    await User.create({
      username,
      email,
      password,
      avatar: avatarURL,
    });

    return res
      .status(201)
      .json({ isSuccess: true, msg: "You signed up successfully"});
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "Something went wrong, please try again" });
  }
};

const TokenUser = async(req,res)=>{
  const user = await User.findById(req.user.id);
  if (!user) {
    return res.status(200).json({isSuccess:false,  error: 'User not found' });
  }
  user.password = undefined;
  return res.json({ isSuccess:true, user });

}

module.exports = {
  LoginController,
  SignController,
  TokenUser
};
