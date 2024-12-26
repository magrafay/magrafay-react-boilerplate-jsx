import React from "react";
import { Link } from "react-router-dom";
import { cn } from "helpers/Utils";

const Button = ({ type = "button", to, onClick, label, icon, className, disabled }) => {
  return (
    <>
      {to ? (
        <Link
          to={to}
          className={cn(
            "px-4 lg:py-3 py-2 rounded-full flex gap-2 text-[14px] lg:text-[20px] font-medium mt-4 shadow-md hover:shadow-lg",
            className ? className : "bg-white"
          )}
          disabled={disabled}
        >
          {label} {icon ? icon : null}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          className={cn(
            "px-4 py-3 rounded-full flex gap-2 text-[14px] lg:text-[20px] font-medium mt-4  shadow-md hover:shadow-lg transition-all duration-300",
            className ? className : "bg-white"
          )}
          disabled={disabled}
        >
          {label} {icon ? icon : null}
        </button>
      )}
    </>
  );
};

export default Button;
