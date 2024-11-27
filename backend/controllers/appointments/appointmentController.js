import { appointmentModel } from './../../models/appointmentModel.js';
import { doctorModel } from './../../models/doctorModel.js';

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
  const updatedAppointments = await appointmentModel.find({ userId });

  // Wait for all reformatted appointments to complete
  const updatedAppointmentsForUI = await Promise.all(
    updatedAppointments.map((appointment) => reformatedAppointment(appointment))
  );

  return res
    .status(200)
    .send({
      success: true,
      message: 'Appointment added successfully',
      updatedAppointments:updatedAppointmentsForUI,
    });
};

// Helper function to reformat the appointment object for frontend
const reformatedAppointment = async ({ doctorId, date, time, _id }) => {
  // Get doctor data:
  const doctor = await doctorModel.findById(doctorId);
  if (!doctor) {
    throw new Error('Error Finding Doctor Data');
  }
  const { name, image, speciality, address } = doctor;
  // Return reformatted appointment object:
  return { _id, doctor: { name, image, speciality, address }, date, time };
};

export const getUserAppointments = async (req, res) => {
  try {
    const userId = req.userId;
    const allAppointments = await appointmentModel.find({ userId });
    if (allAppointments.length === 0) {
      return res
        .status(404)
        .send({ success: false, message: 'No Appointments Found!' });
    }

    // Wait for all reformatted appointments to complete
    const AllAppointmentsForUI = await Promise.all(
      allAppointments.map((appointment) => reformatedAppointment(appointment))
    );

    return res
      .status(200)
      .send({ success: true, allAppointments: AllAppointmentsForUI });
  } catch (error) {
    console.error('Error fetching user appointments:', error);
    return res
      .status(500)
      .send({ success: false, message: 'Internal Server Error' });
  }
};

export const deleteAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.body; // Assuming the appointment ID is passed in the request body
    const userId = req.userId; // Extract the user ID from the validated JWT token
    const appointment = await appointmentModel.findOneAndDelete({
      _id: appointmentId,
      userId: userId,
    });

    if (!appointment) {
      return res.status(404).send({
        success: false,
        message: 'Appointment not found ',
      });
    }

    const updatedAppointments = await appointmentModel.find({ userId });

    // Wait for all reformatted appointments to complete
    const updatedAppointmentsForUI = await Promise.all(
      updatedAppointments.map((appointment) =>
        reformatedAppointment(appointment)
      )
    );

    return res.status(200).send({
      success: true,
      message: 'Appointment deleted successfully',
      updatedAppointments: updatedAppointmentsForUI,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ success: false, message: 'Internal server error' });
  }
};
