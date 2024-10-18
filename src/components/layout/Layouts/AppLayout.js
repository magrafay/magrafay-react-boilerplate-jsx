import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Appbar } from "../Appbar/Appbar";
import { Outlet } from "react-router";

const AppLayout = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };

    MediaQueryList.addListener(listener);
    return () => MediaQueryList.removeListener(listener);
  }, [matches]);

  return (
    <ErrorBoundary
      fallback={
        <pre className="flex h-full w-full justify-center items-center">
          Something went wrong
        </pre>
      }
    >
      <main>
        <Outlet />
      </main>
      <>{matches ? <Appbar isVisible={matches} /> : null}</>
    </ErrorBoundary>
  );
};

export default AppLayout;
