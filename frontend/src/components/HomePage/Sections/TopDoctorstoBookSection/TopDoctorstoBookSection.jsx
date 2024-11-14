import { doctors } from "../../../../assets/assets";
import DoctorCard from "./DoctorCard";
import { useNavigate } from "react-router-dom";

const TopDoctorstoBookSection = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10">
      <div className="text-center text-xl font-bold mt-5">
        Top Doctors to Book
      </div>
      <div className="text-center text-sm mb-7">
        Simply browse through our extensive list of trusted doctors.
      </div>
      {/* Doctors Cards Section */}
      <div className="flex flex-wrap gap-3 justify-center">
        {doctors &&
          doctors.slice(0, 5).map(({ name, image, speciality }, index) => {
            return (
              <DoctorCard
                key={index}
                name={name}
                image={image}
                speciality={speciality}
              ></DoctorCard>
            );
          })}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#EAEFFF] mt-7  rounded-full py-3 px-16  shadow-lg hover:shadow-gray-500"
          onClick={() => {
            navigate("./alldoctors");
          }}
        >
          more
        </button>
      </div>
    </div>
  );
};

export default TopDoctorstoBookSection;
