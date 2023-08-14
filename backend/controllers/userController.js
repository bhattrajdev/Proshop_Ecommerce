import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";

const authUser = asyncHandler(async (req, res) => {
    const {email,password} = req.body
    const user = await User.findOne({email})

    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }else{
        res.status(401)
        throw new Error('Invalid email or password')
    }
});
// for new user register

const registerUser = asyncHandler(async (req, res) => {
  const { name,email, password } = req.body;
  const userExists = await User.findOne({ email });

  if(userExists){
    res.status(400)
    throw new console.Error('User already exists');
  }

  const users = await User.create({
    name,
    email,
    password
  })

  if(userExists){
    res.status(201).res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  }else{

    res.status(400)
    throw new Error('Invalid User data')

  }
});





// for user profile

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if(user){
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  }else{
    res.status(404)
    throw new Error ('User not Found')
  }
});

export {authUser, getUserProfile, registerUser}
