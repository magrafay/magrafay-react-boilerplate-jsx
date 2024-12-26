import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { APPBAR_NAV } from "routes/APP_ROUTES";
import { useAuth } from "provider/AuthContext";
import { MdClose } from "react-icons/md";
import { isImageUrl } from "helpers/Functions";

const Appbar = ({ openSearchModal }) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAuth();

  const handleNavigation = (path) => {
    setIsMenuOpen(false); // Close menu when navigating
    navigate(path);
  };

  return (
    <>
      <style jsx="true">{`
        nav a.active img,
        nav a:hover img {
          filter: brightness(0) saturate(100%) invert(83%) sepia(25%) saturate(2166%) hue-rotate(349deg) brightness(104%) contrast(90%);
        }
        nav a.active svg,
        nav a:hover svg {
          fill: yellow !important;
        }
      `}</style>
      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 w-full z-50">
        <div className="py-1 bg-[#1e1e1e] text-white flex justify-around items-center ">
          {APPBAR_NAV.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 font-light ${
                  isActive ? " text-primary-yellow active" : "text-white hover:text-yellow-400 hover:bg-[#1c1c1c]"
                }`
              }
              onClick={() => handleNavigation(item.path)}
            >
              {isImageUrl(item.icon) ? <img className="h-6" src={item.icon} alt={item.label} /> : item.icon}
              <span className="text-xs">{item.label}</span>
            </NavLink>
          ))}
          <NavLink
            to="search"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 font-light ${
                isActive ? " text-primary-yellow active" : "text-white hover:text-yellow-400 hover:bg-[#1c1c1c]"
              }`
            }
            onClick={() => openSearchModal(true)}
          >
            <FaSearch />
            <span className="text-xs">Search</span>
          </NavLink>
          <button
            className="flex flex-col items-center gap-1 py-2 font-light text-white hover:text-yellow-400 hover:bg-[#1c1c1c]"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars size={20} />
            <span className="text-xs">Menu</span>
          </button>
        </div>
      </nav>

      {/* Slide-Out Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-[#1e1e1e] text-white transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        {/* Header Section */}
        <div className="flex justify-between items-center px-2 py-3 border-b border-gray-700">
          <div className="w-36">
            <Link className="flex" top="/">
              <>Logo Here</>
            </Link>
          </div>
          <button className="text-white text-2xl pr-2" onClick={() => setIsMenuOpen(false)}>
            <MdClose />
          </button>
        </div>

        {/* Login/Register Section */}
        {!user ? (
          <div className="px-2 py-4 border-b border-gray-700 flex gap-4">
            <button
              className="flex-1 bg-transparent border border-gray-500 text-white px-4 h-[36px] uppercase text-[14px] rounded-lg hover:bg-yellow-400 hover:text-black"
              onClick={() => handleNavigation("/login")}
            >
              Login
            </button>
            <button
              className="bg-yellow-400 text-black px-4 h-[36px] uppercase text-[14px] rounded-lg hover:bg-yellow-500 flex-1 "
              onClick={() => handleNavigation("/register")}
            >
              Register
            </button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Appbar;
