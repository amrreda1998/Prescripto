import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { mongoDbConnect } from './config/mongoDB.js';
import configureCloudinary from './config/cloudinary.js';

//app config
const app = express();
const port = process.env.PORT || 4000;
mongoDbConnect();
configureCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//testing server
app.get('/test', (req, res) => {
  res.send(`Server is working .. ;)`);
});

app.listen(port, () => {
  console.log(`Server is working on port ${port} ....`);
});
