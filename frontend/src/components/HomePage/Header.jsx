import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-[#5F6FFF]  text-white rounded px-4 h-auto ">
      {/* Left side */}
      <div className="space-y-8 p-8">
        <p className="text-4xl font-bold">
          Book Appointment
          <br />
          With Trusted Doctors
        </p>
        <div className="flex items-center space-x-4">
          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            className="h-10"
          />
          <p className="text-xs leading-relaxed">
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <button className="flex items-center bg-white text-black font-semibold py-3 px-4 rounded-full mt-4 hover:bg-gray-200 h-11">
          Book Appointment
          <img
            src={assets.arrow_icon}
            alt="Arrow Icon"
            className="w-3 h-3 ml-3"
          />
        </button>
      </div>

      {/* Right side */}
      <div className="hidden md:block w-1/2">
        <img src={assets.header_img} alt="Header Image" className="" />
      </div>
    </div>
  );
};

export default Header;
