import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { useToken } from '../../context/tokenContext';
import UserAvatar from './userAvatar';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useToken(); // token for authorization
  const [dropdownOpen, setDropdownOpen] = useState(false); // dropdown toggle state

  return (
    <div className="flex justify-between text-sm py-4 mb-5 border-b">
      {/* LOGO */}
      <img
        src={assets.logo}
        alt=""
        className="w-44 cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      />

      {/* Nav Links - shown only on large screens and medium screens */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
            }`
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={'/alldoctors'}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
            }`
          }
        >
          <li>All Doctors</li>
        </NavLink>
        <NavLink
          to={'/contacts'}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
            }`
          }
        >
          <li>Contacts</li>
        </NavLink>
        <NavLink
          to={'/about'}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
            }`
          }
        >
          <li>About</li>
        </NavLink>
      </ul>

      {/* Dropdown menu for NavLinks on small  */}
      {token && (
        <div className="md:hidden relative z-50 ">
          <img
            src={assets.menu_icon}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className=" text-white  size-10 my-3"
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
              <ul className="flex flex-col gap-2 p-4 font-medium">
                <NavLink
                  to={'/'}
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded ${
                      isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={'/alldoctors'}
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded ${
                      isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
                    }`
                  }
                >
                  All Doctors
                </NavLink>
                <NavLink
                  to={'/contacts'}
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded ${
                      isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
                    }`
                  }
                >
                  Contacts
                </NavLink>
                <NavLink
                  to={'/about'}
                  onClick={() => setDropdownOpen(false)}
                  className={({ isActive }) =>
                    `py-2 px-3 rounded ${
                      isActive ? 'bg-[#5F6FFF] text-white' : 'text-black'
                    }`
                  }
                >
                  About
                </NavLink>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Create account button or user avatar */}
      {!token ? (
        <button
          className="bg-[#5F6FFF] py-3 px-4 text-white rounded-full font-medium"
          onClick={() => navigate('/signup')}
        >
          Create Account
        </button>
      ) : (
        <UserAvatar />
      )}
    </div>
  );
};

export default Navbar;
