import React from "react";
import CircleLoader from "react-spinners/ClipLoader";

const CustomLoader = ({ size = 50 }) => {
  return (
    <div className="app-loader section">
      <CircleLoader
        color="#9e409b"
        size={size}
        aria-label="Loading"
        data-testid="loader"
      />
    </div>
  );
};

export default CustomLoader;
