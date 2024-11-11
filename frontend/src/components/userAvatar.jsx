import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { assets } from "../assets/assets";
import { useToken } from "../context/tokenContext";

const UserAvatar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setToken } = useToken(); //token for authorization

  let hideTimeout;

  const handleMouseEnter = () => {
    clearTimeout(hideTimeout); // Clear any previous timeout
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setIsDropdownOpen(false), 200); // Add a 200ms delay before hiding
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar image */}
      <img
        src={assets.profile_pic}
        alt="User Avatar"
        className="w-10 h-10 rounded-full cursor-pointer"
      />

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
          <ul className="py-1 text-gray-800">
            <li
              onClick={() => navigate("/profile")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              My Profile
            </li>
            <li
              onClick={() => navigate("/myappointments")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              My Appointments
            </li>
            <li
              onClick={() => setToken(false)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
