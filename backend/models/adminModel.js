import mongoose from 'mongoose';
import { PrescriptoDB } from '../config/mongoDB.js';

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//determine the database you want to connect
//create the database model to use it to commuicate with database

export const adminModel = PrescriptoDB.model('admin', adminSchema);
