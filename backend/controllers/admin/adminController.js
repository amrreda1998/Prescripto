import { uploadImage } from '../../config/cloudinary.js';
import fs from 'fs/promises';
import { doctorModel } from '../../models/doctorModel.js';
import bcrypt from 'bcrypt';
import { validateDoctorData } from './helperFundtions.js';
import { adminModel } from '../../models/adminModel.js';
import { validatePassword } from '../../utlis/auth.js';
import { generateToken } from '../../utlis/tokenGenerator.js';

//Adding a Doctor :

export const addDoctor = async (req, res) => {
  try {
    //DOCTOR STRING DATA :

    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;

    // Parse the address safely
    let parsedAddress;
    try {
      parsedAddress = JSON.parse(address); // Attempt to parse the address
    } catch (error) {
      return res.status(400).send({
        success: false,
        message: 'Invalid address format. Address must be a valid JSON string.',
      });
    }

    //validating of  doctor data :
    const isValidDoctorData = validateDoctorData({
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: parsedAddress,
    });
    if (isValidDoctorData !== null) {
      return res
        .status(400)
        .send({ success: false, message: isValidDoctorData });
    }
    //hashing the password :
    const hashedPassword = await bcrypt.hash(password, 10);

    //DOCTOR IMAGE :

    const imageFile = req.file;
    // validate image existence
    if (!imageFile) {
      return res
        .status(400)
        .send({ success: false, message: 'Image file is required' });
    }
    //uploading the image to cloudinary :
    const imageUpload = await uploadImage(imageFile.path);
    if (!imageUpload) {
      return res
        .status(500)
        .send({ success: false, message: 'Error While uploading the image' });
    }
    //get the image url
    const imageUrl = imageUpload.secure_url;
    //delete the file from the server after its uploaded to the cloud :
    await fs.unlink(imageFile.path);

    //save the doctor info in the database
    const doctorData = {
      name,
      email,
      password: hashedPassword,
      image: imageUrl,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: parsedAddress,
      date: new Date(),
    };

    //creat and save the doctor data in the database
    const createdDoctor = await doctorModel.create(doctorData);

    // Send success response
    res.status(201).send({
      success: true,
      message: `Doctor added successfully`,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send({ success: false, message: 'Internal server error' });
  }
};

// ADMIN LOGIN  //AUTHROIZATION PHASE
export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ success: false, message: 'invalid email or password' });
  }
  //validate the email
  const adminData = await adminModel.findOne({ email });
  if (!adminData) {
    return res
      .status(404)
      .send({ success: false, message: 'invalid email or password' });
  }
  //valdiate the password
  const isValidPassword = await validatePassword(password, adminData.password);
  if (!isValidPassword) {
    return res
      .status(400)
      .send({ success: false, message: 'invalid email or password' });
  }

  //generate token (_id,role) TO USE IT IN THE AUTHETICATION PHASE
  const token = generateToken(adminData._id.toString(), 'admin');
  if (!token) {
    return res
      .status(400)
      .send({ success: false, message: 'Error generating token' });
  }
  //send the token to the browser to store it
  return res.status(400).send({ success: true, message: token });
};
