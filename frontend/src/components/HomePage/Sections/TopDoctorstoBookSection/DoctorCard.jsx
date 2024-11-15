import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({ image, name, speciality, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="border rounded-lg shadow-lg w-48 text-center cursor-pointer bg-white hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out transform"
      onClick={() => {
        navigate("/bookappointment", { state: { id } });
        window.scrollTo(0, 0);
      }}
    >
      {/* Doctor's Image */}
      <img
        src={image}
        alt={`${name}'s profile`}
        className="mb-4 w-full  object-cover rounded-t-lg bg-[#EAEFFF]"
      />

      <div className="p-4">
        {/* Availability */}
        <div className="flex items-center justify-center space-x-1 text-green-500 mb-2">
          <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
          <span className="text-xs font-medium">Available</span>
        </div>

        {/* Doctor's Name */}
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>

        {/* Doctor's Specialty */}
        <p className="text-sm text-gray-600">{speciality}</p>
      </div>
    </div>
  );
};

// Adding PropTypes validation for props
DoctorCard.propTypes = {
  image: PropTypes.string.isRequired, // imagePath should be a required string
  speciality: PropTypes.string.isRequired, // specialityName should be a required string
  name: PropTypes.string.isRequired, // doctor's name
  id: PropTypes.string.isRequired, // doctor`s id
};

export default DoctorCard;
