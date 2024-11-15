import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { assets } from "./../../assets/assets";
import { useToken } from "../../context/tokenContext";

const UserAvatar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setToken } = useToken(); // token for authorization

  const dropdownRef = useRef(null); // Ref to the dropdown menu
  const avatarRef = useRef(null); // Ref to the avatar image

  let hideTimeout;

  // Handle hover (on large screens) and click (on small screens)
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      // Only apply hover for large screens
      clearTimeout(hideTimeout); // Clear any previous timeout
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      hideTimeout = setTimeout(() => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(document.querySelector(":hover"))
        ) {
          setIsDropdownOpen(false);
        }
      }, 200); // Delay the closing of the menu by 200ms
    }
  };

  const handleClick = () => {
    if (window.innerWidth < 768) {
      // Only toggle dropdown on small screens
      setIsDropdownOpen((prev) => !prev);
    }
  };

  const handleItemClick = (navigateTo) => {
    navigate(navigateTo);
    setIsDropdownOpen(false); // Close the dropdown after selecting an item
  };

  return (
    <div className="relative inline-block">
      {/* Avatar image */}
      <img
        ref={avatarRef}
        src={assets.profile_pic}
        alt="User Avatar"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={handleClick} // Handle click for small screens
        onMouseEnter={handleMouseEnter} // Handle hover for large screens
        onMouseLeave={handleMouseLeave} // Handle hover for large screens
      />

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 z-50 mt-2 w-48 bg-white shadow-lg rounded-md"
          onMouseEnter={() => clearTimeout(hideTimeout)} // Prevent menu from closing if mouse is inside
          onMouseLeave={handleMouseLeave} // Close the menu when mouse leaves both avatar and menu
        >
          <ul className="py-1 text-gray-800">
            <li
              onClick={() => handleItemClick("/profile")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              My Profile
            </li>
            <li
              onClick={() => handleItemClick("/myappointments")}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              My Appointments
            </li>
            <li
              onClick={() => {
                setToken(false);
                handleItemClick(""); // Optionally redirect after logout
              }}
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
