import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { mongoDbConnect } from './config/mongoDB.js';
import configureCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
import { seedDoctors } from './utlis/seedDoctors.js';
import doctorRouter from './routes/doctorRoutes.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
mongoDbConnect();
configureCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//call seed function for doctors data

seedDoctors();

//App APIS
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);
app.use('/api/doctors', doctorRouter);

//testing server
app.get('/test', (req, res) => {
  res.send(`Server is working .. ;)`);
});

app.listen(port, () => {
  console.log(`Server is working on port ${port} ....`);
});
