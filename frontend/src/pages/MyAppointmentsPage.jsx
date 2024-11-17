import { assets } from "../assets/assets";
import { useAppointments } from "../context/AppointmentsContext";
import { CalendarIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/solid"; // Updated paths for Heroicons v2

const MyAppointmentsPage = () => {
  const { appointments, setAppointments } = useAppointments(); // Assuming you have setAppointments for state update

  const handleCancelAppointment = (DoctorId) => {
    // Optionally, call an API to cancel the appointment on the backend
    // Example: cancelAppointment(appointmentId).then(() => {
    //   Remove the canceled appointment from the UI (filter it out)
    const updatedAppointments = appointments.filter(
      //filter by doctor id for now because there is the database should create _id for every appointment
      //assuming every appointment the user make has different doctor and the user can not make 2 appointments
      //with the same doctor

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
          {appointments.map((appointment) => (
            <div
              key={
                appointment._id ||
                `${appointment.doctor.id}-${appointment.date}`
              }
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
                <button className="w-full  px-8 py-2 bg-[#5F6FFF] text-white rounded-full shadow-lg hover:bg-[#4b5aff] transition">
                  Pay Online
                </button>
                <button
                  className="w-full  px-8 py-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition"
                  onClick={() => handleCancelAppointment(appointment.doctor.id)}
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
    </div>
  );
};

export default MyAppointmentsPage;
