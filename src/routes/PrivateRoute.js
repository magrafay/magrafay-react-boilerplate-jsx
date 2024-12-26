import React, { lazy } from "react";
import AppLayout from "components/shared/Layouts/AppLayout";

const PageNotFound = lazy(() => import("pages/response/page-not-found"));
const HomePage = lazy(() => import("pages/home/HomePage"));

export default function PrivateRoutes() {
  return {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "*", element: <PageNotFound /> },
    ],
  };
}
