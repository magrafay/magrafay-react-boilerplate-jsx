import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ onClose, isOpen, closeBtnClassName, children, title, className }) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }

    // Clean-up in case the component is unmounted
    return () => {
      body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen]);

  return (
    <>
      <div className="!mx-0 fixed inset-0 bg-black bg-opacity-50 flex lg:items-center items-start justify-center z-50 animate-fadeIn">
        {/* Modal Container */}
        <div
          className={`overflow-y-auto relative text-white lg:rounded rounded-none bg-body transform transition-all duration-300 scale-100 w-full mx-auto ${className}`}
        >
          {/* Modal Header*/}
          <div className="flex items-center justify-between px-4 rounded-t font-bold relative">
            {title}
            <button
              onClick={onClose}
              className={`${closeBtnClassName} leading-none rounded-lg right-4 top-4 outline-none focus:outline-none absolute z-20 w-9 h-9 flex justify-center items-center bg-body hover:bg-[#494949] border border-primary-dark `}
            >
              <MdClose size={30} />
            </button>
          </div>
          {/* Modal Content */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
