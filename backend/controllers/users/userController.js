import bcrypt from 'bcrypt';
import { userModel } from './../../models/userModel.js';
import validator from 'validator';
import { generateToken } from '../../utlis/tokenGenerator.js';
import { validatePassword } from './../../utlis/auth.js';

export const userRegister = async (req, res) => {
  //get the data form frontend
  const { name, email, password } = req.body;

  //validate the comming user data
  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ success: false, message: 'Error Missing User Data' });
  }
  if (!name.length > 0 || !validator.isEmail(email) || password.length < 8) {
    return res
      .status(400)
      .send({ success: false, message: 'Invalid User Data' });
  }

  //hashing the password
  const hashedPassword = await bcrypt.hash(password, 10);

  if (!hashedPassword) {
    return res
      .status(400)
      .send({ success: false, message: 'Error while hashing the password' });
  }

  //save the new user in the database
  const createDbUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  if (!createDbUser) {
    return res.status(400).send({
      success: false,
      message: 'Error while saving the user in the database',
    });
  }

  //return success response

  return res
    .status(201)
    .send({ success: true, message: 'User has been Successfully Created' });
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  //validate email and password :
  if (!email || !password) {
    return res
      .status(400)
      .send({ success: true, message: 'Invalid Email or Password' });
  }

  //Check if the email  exists in the database or not :
  const userData = await userModel.findOne({ email });

  if (!userData) {
    return res
      .status(400)
      .send({ success: false, message: 'Invalid Email or Password' });
  }

  //validate the password :
  const isValidPassword = await validatePassword(password, userData.password);
  if (!isValidPassword) {
    return res
      .status(400)
      .send({ success: false, message: 'Invalid Email or Password' });
  }

  //generate a user token
  const userToken = generateToken(userData._id.toString(), 'user');
  //return the token in response
  return res
    .status(200)
    .send({ success: true, token: userToken, userName: userData.name });
};

export const getUserInfo = async (req, res) => {
  try {
    //get user data from the database :
    const userId = req.userId;

    if (!userId) {
      return res.status(400).sent({
        success: false,
        message: 'Error Retrieving user data , no userID',
      });
    }

    const userData = await userModel.findOne({ _id: userId });

    if (!userData) {
      return res.status(404).send({
        success: false,
        message: 'Error Retrieving user data , user not found',
      });
    }

    //return the userData in a response :
    return res.status(200).send({ success: true, userInfo: userData });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: 'Internal server error' });
  }
};

export const updateUserInfo = async (req, res) => {
  try {
    // Get user data from the database
    const userId = req.userId;
    const newUserData = req.body;

    // Check if userId is provided
    if (!userId) {
      return res.status(400).send({
        success: false,
        message: 'Error Retrieving user data, no userID',
      });
    }

    // Find the user in the database
    const userData = await userModel.findOne({ _id: userId });

    if (!userData) {
      return res.status(404).send({
        success: false,
        message: 'Error updating user data, user not found',
      });
    }

    // Update the user data fields from the request body
    Object.keys(newUserData).forEach((key) => {
      if (newUserData[key] !== undefined) {
        userData[key] = newUserData[key]; // Update only the provided fields
      }
    });

    // Save the updated user data
    await userData.save();

    // Return the updated user data in the response
    return res.status(200).send({ success: true, userInfo: userData });
  } catch (error) {
    return res.status(500).send({ success: false, message: 'Internal server error' });
  }
};

