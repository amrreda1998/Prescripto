import DoctorCard from "../components/HomePage/Sections/TopDoctorstoBookSection/DoctorCard";
import { doctors, specialityData } from "./../assets/assets";
import { useState } from "react";
import BackToTopButton from "./../components/BackToTopButton";

const AllDoctorsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Doctors");
  const [Doctors, SetDoctors] = useState(doctors);

  // Handle filtering doctors by speciality
  const handleFilter = (speciality) => {
    if (speciality === "All Doctors") {
      setActiveFilter(speciality);
      SetDoctors(doctors);
    } else {
      setActiveFilter(speciality);
      // Filtering doctors by speciality
      const filteredDoctors = doctors.filter(
        (doctor) => doctor.speciality === speciality
      );
      SetDoctors(filteredDoctors);
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
              className={`cursor-pointer p-2 text-center rounded transition-all duration-200 shadow-lg shadow-gray-300  ${
                activeFilter === "All Doctors"
                  ? "bg-[#5F6FFF] text-white"
                  : "border  hover:bg-[#5F6FFF] hover:text-white"
              }`}
              onClick={() => handleFilter("All Doctors")}
            >
              All Doctors
            </li>
            {specialityData.map(({ speciality }, index) => (
              <li
                key={index}
                className={`cursor-pointer p-2 text-center rounded transition-all duration-200 shadow-lg shadow-gray-300 ${
                  activeFilter === speciality
                    ? "bg-[#5F6FFF] text-white"
                    : "border  hover:bg-[#5F6FFF] hover:text-white"
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
          {Doctors.map(({ image, name, speciality, _id }) => (
            <div key={_id} className="w-full md:w-1/5 flex justify-center">
              <DoctorCard
                image={image}
                name={name}
                speciality={speciality}
                id={_id}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Back to Top Button */}
      <BackToTopButton />
    </div>
  );
};

export default AllDoctorsPage;
