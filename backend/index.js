import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { mongoDbConnect } from './src/config/mongoDB.js';
import configureCloudinary from './src/config/cloudinary.js';
import adminRouter from './src/routes/adminRoutes.js';
import userRouter from './src/routes/userRoutes.js';
import { seedDoctors } from './src/utlis/seedDoctors.js';
import doctorRouter from './src/routes/doctorRoutes.js';
import appointmentRouter from './src/routes/appointmentRoutes.js';

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
app.use('/api/appointments', appointmentRouter);

//testing server
app.get('/', async (req, res) => {
  try {
    res.status(200).send({ data: 'server is working' });
  } catch (err) {
    res.status(400).send({ message: 'Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is working on port ${port} ....`);
});

export default app;
