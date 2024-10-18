import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full">
      <h1 className="">Login Page</h1>
      <Link to="/">Move to home page</Link>
    </div>
  );
};

export default LoginPage;
