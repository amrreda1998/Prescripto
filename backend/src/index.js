import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { mongoDbConnect } from './config/mongoDB.js';
import configureCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
import { seedDoctors } from './utlis/seedDoctors.js';
import doctorRouter from './routes/doctorRoutes.js';
import appointmentRouter from './routes/appointmentRoutes.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
mongoDbConnect();
configureCloudinary();

// Middlewares
app.use(
  cors({
    origin: 'https://prescripto-book-doctors.vercel.app', //frontend url
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // If you still want to include credentials
  })
);

app.use(express.json());

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
