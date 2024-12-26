// import React from "react";
// import { Navigate } from "react-router-dom";
import AuthLayout from "components/shared/Layouts/AuthLayout";
import LoginPage from "pages/auth/LoginPage";
import HomePage from "pages/home/HomePage";
import PageNotFound from "pages/response/page-not-found";
// import AuthPages from "pages/auth/AuthPages";
// import Login from "pages/auth/Login";
// import ForgotPassword from "pages/auth/ForgotPassword";
// import ChangePassword from "pages/auth/ChangePassword";

export default function PublicRoutes() {
  return [
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <LoginPage /> },
        { index: true, element: <HomePage /> },
        { path: "*", element: <PageNotFound /> },
        // { path: "forgot-password", element: <ForgotPassword /> },
        // { path: "change-password", element: <ChangePassword /> },
      ],
    },
  ];
}
