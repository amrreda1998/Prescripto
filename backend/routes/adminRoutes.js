import express from 'express';

import { addDoctor, adminLogin } from '../controllers/admin/adminController.js';
import upload from '../middlewares/multer.js';
import jwtValidator from '../middlewares/jwtValidator.js';

const adminRouter = express.Router();

//ADD DOCTOR API 
adminRouter.post(
  '/add-doctor',
  jwtValidator(['admin']),
  upload.single('image'),
  addDoctor
);

//ADMIN LOGIN API 
adminRouter.post('/login', adminLogin);

export default adminRouter;
