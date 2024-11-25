import { useState } from 'react';
import { assets} from '../assets/assets';
import DoctorCard from '../components/HomePage/Sections/TopDoctorstoBookSection/DoctorCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppointments } from '../context/AppointmentsContext';
import { useToken } from './../context/tokenContext';
import { useDoctors } from '../context/doctorsContext';

const BookAppointmentPage = () => {
  const location = useLocation();
  const { allDoctors } = useDoctors();
  const choosenDoctor = allDoctors.find(
    (doctor) => doctor._id === location.state?.id
  );

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { appointments, setAppointments } = useAppointments();
  const { token } = useToken();
  const navigate = useNavigate();

  // Helper function to get the next 7 days starting from today
  const getNextSevenDays = () => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();

    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);
      return {
        day: daysOfWeek[date.getDay()],
        date: date.getDate(),
        fullDate: date.toLocaleDateString(), // Full date for saving
      };
    });
  };

  const times = ['8:00 am', '10:00 am', '12:00 pm', '4:00 pm'];

  const AllRelatedDoctors = choosenDoctor
    ? allDoctors.filter(
        (doctor) =>
          doctor.speciality === choosenDoctor.speciality &&
          doctor._id !== choosenDoctor._id
      )
    : [];

  // Function to handle booking the appointment
  const handleBookAppointment = () => {
    if (!token) {
      alert('Please Login First');
      return;
    }
    if (!choosenDoctor || !selectedDay || !selectedTime) return;

    //check exsistence of any appointment with the same doctor
    const alreadyExist = appointments.find(
      (appointment) => choosenDoctor.name === appointment.doctor.name
    );
    if (alreadyExist) {
      console.log('Alreay exist');
      return;
    }
    const newAppointment = {
      doctor: {
        id: choosenDoctor._id,
        name: choosenDoctor.name,
        image: choosenDoctor.image,
        speciality: choosenDoctor.speciality,
        address: choosenDoctor.address,
      },
      date: selectedDay.fullDate, // Save full date
      time: selectedTime,
      status: 'Booked', // Status for appointment tracking
    };

    setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);

    // Reset selected day and time after booking
    setSelectedDay(null);
    setSelectedTime(null);
    navigate('/myappointments');
  };

  return (
    <>
      <div className="lg:flex flex-wrap md:flex-nowrap items-center gap-7 lg:space-y-0 space-y-6 ">
        {choosenDoctor ? (
          <>
            <img
              src={choosenDoctor.image}
              className="w-64 bg-[#5F6FFF] rounded-lg justify-self-center"
              alt="Doctor profile"
            />
            <div className="border-2 border-gray-400 p-3 rounded-lg">
              <p className="flex items-center font-bold">
                {choosenDoctor.name}
                <img
                  src={assets.verified_icon}
                  className="mx-2 w-5 h-5"
                  alt="Verified"
                />
              </p>
              <p className="flex items-center">
                {choosenDoctor.degree} - {choosenDoctor.speciality}
                <span className="border border-gray-600 px-2 mx-3 rounded-full">
                  {choosenDoctor.experience}
                </span>
              </p>
              <p className="my-2">
                {choosenDoctor.name} is committed to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies.
              </p>
              <p className="my-2">Appointment fee: ${choosenDoctor.fees}</p>
            </div>
          </>
        ) : (
          <p>Doctor not found.</p>
        )}
      </div>

      <div className="my-10">
        <p className="text-center py-6 text-lg font-semibold ">Booking Slots</p>

        {/* Choosing day */}
        <div className="flex gap-3 justify-center flex-wrap my-4">
          {getNextSevenDays().map(({ day, date, fullDate }, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay({ day, date, fullDate })}
              className={`${
                selectedDay?.fullDate === fullDate
                  ? 'bg-[#5F6FFF] text-white'
                  : 'bg-white '
              } w-20 h-20 rounded-full border-2 border-[#5F6FFF] flex flex-col items-center justify-center transition duration-300`}
            >
              {day}
              <span className="text-sm">{date}</span>
            </button>
          ))}
        </div>

        {/* Choosing time */}
        <div className="flex gap-3 justify-center flex-wrap my-4">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`${
                selectedTime === time ? 'bg-[#5F6FFF] text-white' : 'bg-white '
              } px-4 py-2 rounded-full border-2 border-[#5F6FFF] transition duration-300`}
            >
              {time}
            </button>
          ))}
        </div>

        <div className="text-center my-10">
          <button
            className="bg-[#5F6FFF] shadow-lg hover:shadow-gray-500 p-4 text-white rounded-full"
            disabled={!selectedDay || !selectedTime}
            onClick={handleBookAppointment}
          >
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Related Doctors */}
      <div>
        <div className="text-center mt-20">
          <p className="text-xl font-semibold text-[#5F6FFF]">
            Related Doctors
          </p>
          <p>Browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center my-7">
          {AllRelatedDoctors.length > 0 ? (
            AllRelatedDoctors.map(({ image, name, speciality, _id }) => (
              <DoctorCard
                key={_id}
                id={_id}
                image={image}
                name={name}
                speciality={speciality}
              />
            ))
          ) : (
            <p>No related doctors found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookAppointmentPage;
