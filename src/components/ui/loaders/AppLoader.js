import React from "react";
import CircleLoader from "react-spinners/ClipLoader";

const AppLoader = ({ size = 50 }) => {
  return (
    <div className="app-loader page">
      <CircleLoader
        color="#9e409b"
        size={size}
        aria-label="Loading"
        data-testid="loader"
      />
    </div>
  );
};

export default AppLoader;
