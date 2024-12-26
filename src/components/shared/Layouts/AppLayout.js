import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router";
import Appbar from "../Appbar";
import AppHeader from "../AppHeader";
import AppFooter from "../AppFooter";
import Login from "pages/auth/LoginPage";
import Modal from "components/ui/Modal";
import { useAuth } from "provider/AuthContext";

const AppLayout = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [matchesMedia, setMatchesMedia] = useState({
    isMobile: window?.innerWidth <= 1024,
    isTablet: window?.innerWidth <= 768,
  });

  const { login, logout } = useAuth();

  const handleLoginClick = () => setIsLoginModalOpen(true);
  const handleCloseModal = () => setIsLoginModalOpen(false);

  const handleLoginSuccess = (userData) => {
    login(userData);
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setMatchesMedia({
        isMobile: window?.innerWidth <= 1024,
        isTablet: window?.innerWidth <= 768,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ErrorBoundary
      fallback={<pre className="flex h-full w-full min-h-screen justify-center items-center text-red-500 text-4xl">Something went wrong</pre>}
    >
      <AppHeader onLoginClick={handleLoginClick} onRegisterClick={handleLoginClick} onLogout={logout} />
      <main className="min-h-screen bg-body">
        <Outlet />
      </main>
      <AppFooter />
      <>{matchesMedia.isMobile ? <Appbar isVisible={matchesMedia.isMobile} /> : null}</>
      {isLoginModalOpen && <Login onLoginSuccess={handleLoginSuccess} isOpen={isLoginModalOpen} onClose={handleCloseModal} />}
    </ErrorBoundary>
  );
};

export default AppLayout;
