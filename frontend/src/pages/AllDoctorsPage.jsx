/* eslint-disable react-hooks/exhaustive-deps */
import DoctorCard from '../components/HomePage/Sections/TopDoctorstoBookSection/DoctorCard';
import { specialityData } from './../assets/assets';
import { useEffect, useState } from 'react';
import BackToTopButton from './../components/BackToTopButton';
import { useLocation } from 'react-router-dom';
import { useDoctors } from './../context/doctorsContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const AllDoctorsPage = () => {
  const location = useLocation(); // Access location object
  const speciality = location.state || { speciality: 'All Doctors' }; // Extract props from `state`

  const [activeFilter, setActiveFilter] = useState(speciality);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { allDoctors } = useDoctors();

  useEffect(() => {
    if (allDoctors) {
      setDoctors(allDoctors);
      handleFilter(speciality.speciality);
      setTimeout(() => { setLoading(false); }, 600);
    }
  }, [speciality.speciality, allDoctors]);

  // Handle filtering doctors by speciality
  const handleFilter = (speciality) => {
    if (speciality === 'All Doctors') {
      setActiveFilter(speciality);
      setDoctors(allDoctors);
    } else {
      setActiveFilter(speciality);
      // Filtering doctors by speciality
      const filteredDoctors = allDoctors.filter(
        (doctor) => doctor.speciality === speciality
      );
      setDoctors(filteredDoctors);
    }
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {/* Filters Section */}
        <div className="flex-none w-full md:w-32 flex justify-center">
          <ul className="text-center space-y-4">
            <span className="font-bold text-lg">Filters</span>
            <li
              className={`cursor-pointer p-2 text-center rounded transition-all duration-200 shadow-lg shadow-gray-300 ${
                activeFilter === 'All Doctors'
                  ? 'bg-[#5F6FFF] text-white'
                  : 'border hover:bg-[#5F6FFF] hover:text-white'
              }`}
              onClick={() => handleFilter('All Doctors')}
            >
              All Doctors
            </li>
            {specialityData.map(({ speciality }, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 text-center rounded transition-all duration-200 shadow-lg shadow-gray-300 ${
                  activeFilter === speciality
                    ? 'bg-[#5F6FFF] text-white'
                    : 'border hover:bg-[#5F6FFF] hover:text-white'
                }`}
                onClick={() => handleFilter(speciality)}
              >
                {speciality}
              </li>
            ))}
          </ul>
        </div>

        {/* Doctors Cards Section */}
        <div className="flex-1 flex flex-wrap gap-4 justify-center">
          {loading ? (
            // Show skeletons while loading
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-full md:w-1/5 flex justify-center">
                <Skeleton height={200} width={150} />
              </div>
            ))
          ) : doctors.length > 0 ? (
            doctors.map(({ image, name, speciality, _id }) => (
              <div
                key={_id.toString()}
                className="w-full md:w-1/5 flex justify-center"
              >
                <DoctorCard
                  image={image}
                  name={name}
                  speciality={speciality}
                  id={_id.toString()}
                />
              </div>
            ))
          ) : (
            <p className="py-8 font-bold text-lg ">No doctors available</p>
          )}
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default AllDoctorsPage;
