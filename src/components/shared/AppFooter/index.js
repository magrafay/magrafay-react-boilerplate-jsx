import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const AppFooter = () => {
  return (
    <footer className="bg-body py-20 sm:py-4 pt-4 border-t border-gray-200">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col items-center space-y-6 sm:space-y-0 sm:flex-row sm:justify-between">
          <Link to="/home" className="flex items-center space-x-4">
            <h1 className="text-lg sm:text-xl font-bold text-yellow-500">LOGOHERE</h1>
          </Link>
        </div>
        <hr className="my-6 border-l-4 border-white border-opacity-50 sm:mx-auto lg:my-8" />
        <div className="text-center space-y-2">
          <span className="block text-sm text-gray-500 dark:text-gray-400">Copyright 2024 © BRAND</span>
          <span className="block text-sm text-gray-500 dark:text-gray-400">All Rights Reserved 2024</span>
        </div>
        <div className="pt-6 flex justify-center items-center space-x-6">
          {/* Vertical Separator */}
          <div className="border-l-2 border-white border-opacity-50 h-[3.2rem] sm:h-[3.5rem]"></div>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">
              <FaFacebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition">
              <FaTwitter size={28} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition">
              <FaInstagram size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
