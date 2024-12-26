import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../provider/AuthContext"; // Import the AuthContext hook
import { HiMiniBars3 } from "react-icons/hi2";
import { Button } from "@headlessui/react";
// import { IoCloseOutline } from "react-icons/io5";

const AppHeader = ({ onLoginClick }) => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();
  const [currentTime, setCurrentTime] = useState(new Date());

  const isUserRole = user?.role === "User";

  const [isMobile, setIsMobile] = useState(window?.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { path: "/", label: "LINK" },
    { path: "/", label: "LINK" },
    { path: "/", label: "LINK" },
    { path: "/", label: "LINK" },
  ];
  return (
    <>
      <header className=" text-white bg-body shadow-lg border-b border-gray-200">
        <div className="flex items-center justify-between py-2 px-3">
          {/* Left Section */}
          <Link to={"/"} className="flex items-center space-x-4">
            <h1 className="flex mr-5 lg:max-w-56 max-w-36 text-white font-bold">LOGOHERE</h1>
          </Link>

          {/* Center Section (Desktop) */}
          {/* {isUserRole || !user ? ( */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <NavLink
                key={item.id}
                to={item.path}
                className={`text-base lg:text-[15px] text-nowrap [& .action]:text-primary-yellow text-white hover:text-yellow-400
                }`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          {/* ) : null} */}

          {/* Right Section */}
          <div className="flex items-center space-x-3 pl-4">
            {user ? (
              <>
                <Link
                  to="/"
                  className="px-2 py-1 bg-yellow-500 text-[12px] hover:bg-yellow-400 uppercase  text-sm transition duration-300 rounded-lg text-black font-light"
                >
                  {user && user?.role ? user?.role : "Guest"}
                </Link>
                <Button
                  onClick={logout}
                  className="px-2 py-1 bg-yellow-500 text-[12px] hover:bg-yellow-400 uppercase  text-sm transition duration-300 rounded-lg text-black font-light"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    isMobile ? navigate("/auth/login") : onLoginClick();
                  }}
                  className="lg:px-4 lg:py-2 px-3 lg:text-sm text-[10px] py-1 rounded-lg border border-gray-500 hover:border-primary-yellow transition-all"
                >
                  LOGIN
                </button>
                <button className="bg-primary text-white lg:px-4 lg:py-2 px-3 py-1 rounded-lg lg:text-sm text-[10px] hover:bg-yellow-400">
                  REGISTER
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
