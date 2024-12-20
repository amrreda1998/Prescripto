import express from 'express';
import { doctorModel } from '../models/doctorModel.js';

const doctorRouter = express.Router();

//GET ALL DOCTORS API :
doctorRouter.get('/', async (req, res) => {
  try {
    const allDoctors = await doctorModel.find();
    if (allDoctors.length === 0) {
      return res.status(400).send('Doctors Not Found');
    }
    return res.status(200).send({
      success: true,
      message: 'Succefully Reterived Doctors Data',
      doctors: allDoctors,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal server Error');
  }
});

export default doctorRouter;
