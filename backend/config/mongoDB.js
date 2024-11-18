import mongoose from 'mongoose';

//Create/intialiaze a reference to the database to use it when creating models 
export const PrescriptoDB = mongoose.connection.useDb('Prescripto');

// using mongoose to conncet to mongodb database
export const mongoDbConnect = async () => {
  //Connect to the database
  try {
    await mongoose.connect(process.env.DATABASE_URL || '');
    console.log('Connected successfully to MongoDB');
  } catch (err) {
    console.error('Failed to connect to the database!', err);
  }
};
