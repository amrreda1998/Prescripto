import { assets } from "./../../../assets/assets";

const BannerSection = () => {
  return (
    <div className="relative flex items-center justify-between bg-[#5F6FFF] text-white rounded px-4 h-72 mx-5 my-10 overflow-visible">
      {/* Left side */}
      <div className="space-y-8 p-8">
        <p className="md:text-4xl text-2xl font-bold">
          Book Appointment
          <br />
          With 100+ Trusted Doctors
        </p>
        <button className="flex items-center md:text-lg text-xs bg-white text-black font-semibold py-3 px-4 rounded-full mt-4 hover:bg-gray-200 h-11">
          Create An Account
          <img
            src={assets.arrow_icon}
            alt="Arrow Icon"
            className="w-3 h-3 ml-3"
          />
        </button>
      </div>

      {/* Right side */}
      <div className="hidden lg:block w-72 absolute bottom-0 right-14">
        <img src={assets.appointment_img} alt="Banner Image" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default BannerSection;
