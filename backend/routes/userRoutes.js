import express from 'express';

import upload from '../middlewares/multer.js';
import jwtValidator from '../middlewares/jwtValidator.js';
import {
  getUserInfo,
  updateUserInfo,
  userLogin,
  userRegister,
} from '../controllers/users/userController.js';

const userRouter = express.Router();

//USER Register API
userRouter.post('/register', userRegister);

//USER LOGIN API
userRouter.post('/login', userLogin);

//GET USER INFO API
userRouter.get('/', jwtValidator(['user']), getUserInfo);

//UPDATE USER INFO API
userRouter.put('/', jwtValidator(['user']), updateUserInfo);

export default userRouter;
