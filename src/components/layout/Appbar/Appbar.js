import React from "react";
import { Link } from "react-router-dom";

export const Appbar = ({ isVisible = false }) => {
  return isVisible ? (
    <div className="app-bar">
      <Link to="/">
        <span>{/* <FaHome /> */}</span>
        <label>Home</label>
      </Link>
      <Link to="/">
        <span>{/* <FaHeadphones /> */}</span>
        <label>Support</label>
      </Link>
      <Link to="/">
        <span>{/* <FaUserAlt /> */}</span>
        <label>Profile</label>
      </Link>
    </div>
  ) : null;
};
