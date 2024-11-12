import PropTypes from "prop-types";

const SpecialityCard = ({ imagePath, specialityName }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow w-28">
      <img
        src={imagePath}
        alt={specialityName}
        className="w-20 h-20 mb-2 object-cover rounded-full"
      />
      <div className="text-xs font-semibold text-gray-800">
        {specialityName}
      </div>
    </div>
  );
};

// Adding PropTypes validation for props
SpecialityCard.propTypes = {
  imagePath: PropTypes.string.isRequired, // imagePath should be a required string
  specialityName: PropTypes.string.isRequired, // specialityName should be a required string
};

export default SpecialityCard;
