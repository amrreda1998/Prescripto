import { assets } from '../assets/assets';
import { useAppointments } from '../context/AppointmentsContext';
import { CalendarIcon, MapPinIcon, UserIcon } from '@heroicons/react/24/solid'; // Updated paths for Heroicons v2
import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAppointmentsPage = () => {
  const { appointments, setAppointments } = useAppointments(); // Assuming you have setAppointments for state update
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  });

  const handleCancelAppointment = (DoctorId) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.doctor.id !== DoctorId
    );
    setAppointments(updatedAppointments); // Update state with the filtered appointments
  };

  return (
    <div className="p-8 lg:px-24">
      <h2 className="text-3xl font-bold text-[#5F6FFF] mb-8 text-center">
        My Appointments
      </h2>

      {appointments.length > 0 ? (
        <div className="grid gap-6">
          {loading // Show skeletons while loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between transition duration-300 bg-white"
                >
                  <div className="flex items-center gap-5 w-full lg:w-auto flex-col lg:flex-row">
                    <Skeleton circle={true} height={112} width={112} />
                    <div className="space-y-4 lg:pl-4">
                      <Skeleton width={180} height={24} />
                      <Skeleton width={120} height={20} />
                      <Skeleton width={200} height={20} />
                      <Skeleton width={150} height={20} />
                    </div>
                  </div>
                  <div className="mt-5 lg:mt-0 space-y-3 flex flex-col w-full lg:w-auto lg:items-center">
                    <Skeleton width={140} height={36} />
                    <Skeleton width={140} height={36} />
                  </div>
                </div>
              ))
            : appointments.map((appointment) => (
                <div
                  key={appointment._id}
                  className="border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between transition duration-300 hover:shadow-xl bg-white"
                >
                  <div className="flex items-center gap-5 w-full lg:w-auto flex-col lg:flex-row">
                    <img
                      src={appointment.doctor.image || assets.default_doctor}
                      alt="Doctor Profile"
                      className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-[#5F6FFF] border-4 border-white shadow-lg "
                    />

                    <div className="space-y-4 lg:pl-4">
                      <div className="flex items-center gap-2">
                        <UserIcon className="w-5 h-5 text-[#5F6FFF]" />
                        <p className="text-xl font-bold text-gray-800">
                          {appointment.doctor.name}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <UserIcon className="w-5 h-5 text-[#5F6FFF]" />
                        <p>{appointment.doctor.speciality}</p>
                      </div>
                      <div className="flex flex-col gap-1 text-gray-700">
                        <div className="flex items-center gap-2">
                          <MapPinIcon className="w-5 h-5 text-[#5F6FFF]" />
                          <p className="font-semibold">Address:</p>
                        </div>
                        <p className="pl-7">
                          {appointment.doctor.address.line1}
                          <br />
                          {appointment.doctor.address.line2}
                        </p>
                      </div>
                      <div className="flex flex-col gap-1 text-gray-700">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5 text-[#5F6FFF]" />
                          <p className="font-semibold">Date & Time:</p>
                        </div>
                        <p className="pl-7 text-gray-500">
                          {appointment.date} at {appointment.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 lg:mt-0 space-y-3 flex flex-col w-full lg:w-auto lg:items-center">
                    <button className="w-full px-8 py-2 bg-[#5F6FFF] text-white rounded-full shadow-lg hover:bg-[#4b5aff] transition">
                      Pay Online
                    </button>
                    <button
                      className="w-full px-8 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
                      onClick={() =>
                        handleCancelAppointment(appointment.doctor.id)
                      }
                    >
                      Cancel Appointment
                    </button>
                  </div>
                </div>
              ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No appointments found.
        </p>
      )}
      <ToastContainer autoClose={500} />
    </div>
  );
};

export default MyAppointmentsPage;
