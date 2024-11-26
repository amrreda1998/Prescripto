import { appointmentModel } from './../../models/appointmentModel.js';

export const AddAppointment = async (req, res) => {
  const userId = req.userId;
  const { doctorId, date, time } = req.body;

  if (!req.body) {
    return res.status(400).send({
      success: false,
      message: 'Failed to add Appointmet,Invalid appointment data',
    });
  }

  const fullAppointmentData = { doctorId, date, time, userId: userId };

  //check if this appointment exists in the database before create it :
  const appointmentExist = await appointmentModel.findOne(fullAppointmentData);
  if (appointmentExist) {
    return res
      .status(400)
      .send({ success: false, message: 'Appointment already exist' });
  }

  //add the appointment to the database :
  const addAppointment = await appointmentModel.create(fullAppointmentData);
  if (!addAppointment) {
    return res.status(500).send({
      success: false,
      message: 'Failed to add Appointmet ,\n Internal server Error',
    });
  }
  return res
    .status(200)
    .send({ success: true, message: 'Appointment added successfully' });
};
