import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useToken } from '../../context/tokenContext';
import { useUser } from './../../context/userContext';

const UserAvatar = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setToken } = useToken(); // token for authorization
  const { userData } = useUser();

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
          !dropdownRef.current.contains(document.querySelector(':hover'))
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
      {userData.name !== 'User' ? (
        <div
          className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#5F6FFF] shadow-lg relative cursor-pointer"
          onClick={handleClick} // Handle click for small screens
          onMouseEnter={handleMouseEnter} // Handle hover for large screens
          onMouseLeave={handleMouseLeave} // Handle hover for large screens}
        >
          {userData.image ? (
            <img
              ref={avatarRef}
              src={userData.image}
              alt="User Avatar"
              className="absolute top-4 left-1/2 transform -translate-x-1/2 scale-150 "
            />
          ) : (
            <span className="flex  justify-center w-full h-full    bg-[#5F6FFF] text-white text-5xl font-bold">
              {' '}
              {userData.name.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
      ) : (
        <></>
      )}

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
              onClick={() => handleItemClick('/profile')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              My Profile
            </li>
            <li
              onClick={() => handleItemClick('/myappointments')}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              My Appointments
            </li>
            <li
              onClick={() => {
                //remove the token from the local storage
                localStorage.removeItem('userToken');
                //reset the token
                setToken('');
                window.location.replace('/login'); // Optionally redirect after logout
              }}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
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
