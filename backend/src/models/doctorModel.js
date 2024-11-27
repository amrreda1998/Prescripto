import mongoose from 'mongoose';
import { PrescriptoDB } from '../config/mongoDB.js';

// Define a sub-schema for address
const addressSchema = new mongoose.Schema({
  line1: { type: String, required: true },
  line2: { type: String, required: true },
});

//TODO :
// Define a sub-schema for bookingSlots
const bookingSlotSchema = new mongoose.Schema({
  day: { type: String },
  times: [String],
});

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // email: { type: String, required },
    // password: { type: String ,required},
    image: { type: String, required: true },
    speciality: { type: String, required: true },
    degree: { type: String, required: true },
    experience: { type: String, required: true },
    about: { type: String, required: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, required: true, min: 0 }, //prevent negative numbers in database
    address: { type: addressSchema, required: true },
    available_booking_solts: { type: [bookingSlotSchema], default: [] },
  },
  { minimize: false }
);

//determine the database you want to connect
//create the database model to use it to commuicate with database

export const doctorModel = PrescriptoDB.model('doctors', doctorSchema);
