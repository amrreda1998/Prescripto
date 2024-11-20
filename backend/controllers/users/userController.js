import bcrypt from 'bcrypt';
import { userModel } from './../../models/userModel.js';
import validator from 'validator';

export const userRegister = async (req, res) => {
  //get the data form frontend
  const { name, email, password } = req.body;

  //validate the comming user data
  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ success: false, message: 'Error Missing User Data' });
  }
  if (
    !name.length>0||
    !validator.isEmail(email) ||
    password.length < 8
  ) {
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

export const userLogin = (req, res) => {};
