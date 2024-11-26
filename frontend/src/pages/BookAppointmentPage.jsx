import { useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import DoctorCard from '../components/HomePage/Sections/TopDoctorstoBookSection/DoctorCard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppointments } from '../context/AppointmentsContext';
import { useToken } from './../context/tokenContext';
import { useDoctors } from '../context/doctorsContext';

const BookAppointmentPage = () => {
  const location = useLocation();
  const { allDoctors } = useDoctors();
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const { appointments, setAppointments } = useAppointments();
  const { token } = useToken();
  const navigate = useNavigate();
  const chosenDoctor = allDoctors.find(
    (doctor) => doctor._id === location.state?.id
  );

  let doctorAvailableDays = [];
  if (chosenDoctor) {
    doctorAvailableDays = chosenDoctor.available_booking_solts.map(
      (slot) => slot.day
    );
  }

  // Function to filter the seven days objects according to doctorsAvailableDays:
  const getDoctorAvailableDays = (sevenDays, doctorAvailableDays) => {
    return sevenDays.filter(({ day }) => doctorAvailableDays.includes(day));
  };

  const getAvailableTimesForSelectedDay = (selectedDay, availableSlots) => {
    const slot = availableSlots.find(
      ({ day }) => day.toLowerCase() === selectedDay.toLowerCase()
    );
    return slot ? slot.times : [];
  };

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

  useEffect(() => {
    if (chosenDoctor) {
      const firstDay = getDoctorAvailableDays(
        getNextSevenDays(),
        doctorAvailableDays
      )[0];
      if (firstDay) {
        setSelectedDay(firstDay);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenDoctor]);

  useEffect(() => {
    if (selectedDay && chosenDoctor) {
      setAvailableTimes(
        getAvailableTimesForSelectedDay(
          selectedDay.day,
          chosenDoctor.available_booking_solts
        )
      );
    }
  }, [selectedDay, chosenDoctor]);

  const allRelatedDoctors = chosenDoctor
    ? allDoctors.filter(
        (doctor) =>
          doctor.speciality === chosenDoctor.speciality &&
          doctor._id !== chosenDoctor._id
      )
    : [];

  // Function to handle booking the appointment
  const handleBookAppointment = () => {
    if (!token) {
      alert('Please Login First');
      return;
    }
    if (!chosenDoctor || !selectedDay || !selectedTime) return;

    // Check existence of any appointment with the same doctor
    const alreadyExist = appointments.find(
      (appointment) => chosenDoctor.name === appointment.doctor.name
    );
    if (alreadyExist) {
      console.log('Already exist');
      return;
    }
    const newAppointment = {
      
      doctor: {
        id: chosenDoctor._id,
        name: chosenDoctor.name,
        image: chosenDoctor.image,
        speciality: chosenDoctor.speciality,
        address: chosenDoctor.address,
      },
      date: selectedDay.fullDate, // Save full date
      time: selectedTime,
    };

    setAppointments((prevAppointments) => [
      ...prevAppointments,
      newAppointment,
    ]);

    navigate('/myappointments');
  };

  return (
    <>
      <div className="lg:flex flex-wrap md:flex-nowrap items-center gap-7 lg:space-y-0 space-y-6 ">
        {chosenDoctor ? (
          <>
            <img
              src={chosenDoctor.image}
              className="w-64 bg-[#5F6FFF] rounded-lg justify-self-center"
              alt="Doctor profile"
            />
            <div className="border-2 border-gray-400 p-3 rounded-lg">
              <p className="flex items-center font-bold">
                {chosenDoctor.name}
                <img
                  src={assets.verified_icon}
                  className="mx-2 w-5 h-5"
                  alt="Verified"
                />
              </p>
              <p className="flex items-center">
                {chosenDoctor.degree} - {chosenDoctor.speciality}
                <span className="border border-gray-600 px-2 mx-3 rounded-full">
                  {chosenDoctor.experience}
                </span>
              </p>
              <p className="my-2">
                {chosenDoctor.name} is committed to delivering comprehensive
                medical care, focusing on preventive medicine, early diagnosis,
                and effective treatment strategies.
              </p>
              <p className="my-2">Appointment fee: ${chosenDoctor.fees}</p>
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
          {getDoctorAvailableDays(getNextSevenDays(), doctorAvailableDays)?.map(
            ({ day, date, fullDate }, index) => (
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
            )
          )}
        </div>

        {/* Choosing time */}
        <div className="flex gap-3 justify-center flex-wrap my-4">
          {availableTimes?.map((time, index) => (
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
          {allRelatedDoctors.length > 0 ? (
            allRelatedDoctors.map(({ image, name, speciality, _id }) => (
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
