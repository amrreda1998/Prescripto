import express from 'express';

import jwtValidator from '../middlewares/jwtValidator.js';
import { AddAppointment } from '../controllers/appointments/appointmentController.js';

const appointmentRouter = express.Router();

//GET USER Appointments API
// appointmentRouter.get('/', jwtValidator(['user']), getUserAppointments);

//ADD USER Appointment API
appointmentRouter.post(
  '/user/add-appointment',
  jwtValidator(['user']),
  AddAppointment
);

//Delete USER Appointment API
// appointmentRouter.delete(
//   '/user/delete-appointment',
//   jwtValidator(['user']),
//   deleteAppointment
// );
export default appointmentRouter;
