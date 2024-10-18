import React from "react";
import { RouterProvider } from "react-router-dom";

const AppRouterProvider = ({ router }) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouterProvider;
