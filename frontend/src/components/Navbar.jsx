import { NavLink } from "react-router-dom";
import { assets } from "./../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between text-sm py-4 mb-5 border-b">
      {/* LOGO */}
      <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-5 font-medium">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? "bg-[#5F6FFF] text-white" : "text-black"
            }`
          }
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to={"/alldoctors"}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? "bg-[#5F6FFF] text-white" : "text-black"
            }`
          }
        >
          <li>All Doctors</li>
        </NavLink>
        <NavLink
          to={"/contacts"}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? "bg-[#5F6FFF] text-white" : "text-black"
            }`
          }
        >
          <li>Contacts</li>
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `py-2 px-3 rounded ${
              isActive ? "bg-[#5F6FFF] text-white" : "text-black"
            }`
          }
        >
          <li>About</li>
        </NavLink>
      </ul>
      {/* Create acount button */}
      <button className="bg-[#5F6FFF] py-3 px-4 text-white rounded-full font-medium">
        Create Account
      </button>
    </div>
  );
};

export default Navbar;
