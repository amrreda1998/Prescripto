import mongoose from 'mongoose';
import { PrescriptoDB } from '../config/mongoDB.js';

const appointmentSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  doctorId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

//determine the database you want to connect
//create the database model to use it to commuicate with database

export const appointmentModel = PrescriptoDB.model(
  'appointments',
  appointmentSchema
);
