import express from 'express';

import upload from '../middlewares/multer.js';
import jwtValidator from '../middlewares/jwtValidator.js';
import { userLogin, userRegister } from '../controllers/users/userController.js';

const userRouter = express.Router();

//USER Register API
userRouter.post('/register', userRegister);

//USER LOGIN API
userRouter.post('/login', userLogin);

export default userRouter;
