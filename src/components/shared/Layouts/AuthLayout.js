import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <ErrorBoundary
      fallback={
        <pre className="flex h-full w-full justify-center items-center">
          Something went wrong
        </pre>
      }
    >
      <div className="auth-wrapper">
        <Outlet />
      </div>
    </ErrorBoundary>
  );
};

export default AuthLayout;
