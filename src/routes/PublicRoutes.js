// import React from "react";
// import { Navigate } from "react-router-dom";
import AuthLayout from "../components/layout/Layouts/AuthLayout";
import LoginPage from "../pages/auth/Login";
// import AuthPages from "../pages/auth/AuthPages";
// import Login from "../pages/auth/Login";
// import ForgotPassword from "../pages/auth/ForgotPassword";
// import ChangePassword from "../pages/auth/ChangePassword";

export default function PublicRoutes() {
  return [
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        // { path: "forgot-password", element: <ForgotPassword /> },
        // { path: "change-password", element: <ChangePassword /> },
      ],
    },
    // { path: "*", element: <Navigate to="/auth/login" replace /> },
  ];
}
