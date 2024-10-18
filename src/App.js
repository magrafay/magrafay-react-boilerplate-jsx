import { Suspense, useEffect, useState } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
// import { useSelector } from "react-redux";
import AppRouterProvider from "./routes/AppRoutesProvider";
import PrivateRoutes from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes";
import AppLoader from "./components/loaders/AppLoader";
import "./assets/css/styles.min.css";
import { TOKEN_KEY } from "./helpers/constants";
// import { AccordionDemo } from "./components/shadcn/Accordion";

function App() {
  const [matches, setMatches] = useState(false);
  let user = { name: "magrafay" };
  // const { user } = useSelector((state) => ({
  //   user: state.loggedInUser,
  // }));

  const checkAuth = () => {
    if (user && localStorage.getItem(TOKEN_KEY)) {
      redirect("/");
    } else {
      redirect("/auth/login");
    }
  };

  const router = createBrowserRouter([
    checkAuth() ? PrivateRoutes() : {},
    ...PublicRoutes(),
  ]);

  useEffect(() => {
    localStorage.setItem(
      TOKEN_KEY,
      "CcFjvOP0ujo5mxLmqfYFImz5d66ysUFeGcYGTpqceUudpPGd30HaEgWoUy486u5h"
    );
    const media = window.matchMedia("(max-width: 1200px)");
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches]);

  return (
    <>
      <div className="app-wrapper">
        <Suspense fallback={<AppLoader />}>
          <AppRouterProvider router={router} />
          {/* <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={15}
            containerClassName="toaster-container"
            containerStyle={{ marginTop: "60px" }}
            toastOptions={{
              // Define default options
              className: "",
              duration: 2000,
              // Default options for specific types
              error: {
                duration: 3000,
                theme: {
                  primary: "red",
                  secondary: "white",
                },
              },
            }}
          /> */}
        </Suspense>
      </div>
    </>
  );
}

export default App;
