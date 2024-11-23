import mongoose from 'mongoose';
import { PrescriptoDB } from '../config/mongoDB.js';

// Define a sub-schema for address
// const addressSchema = new mongoose.Schema({
//   line1: { type: String, default: '' },
//   line2: { type: String, default: '' },
// });

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' },
    image: {
      type: String,
      default: '',
    },
    gender: { type: String, default: 'Not Selected' },
    address: { type: String, default: '' },
    birthdate: { type: String, default: '' },
    phone: { type: String, default: '' },
  },
  { minimize: false }
);

//determine the database you want to connect
//create the database model to use it to commuicate with database

export const userModel = PrescriptoDB.model('users', userSchema);
