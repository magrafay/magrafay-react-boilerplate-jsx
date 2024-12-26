import { Suspense } from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import { TOKEN_KEY } from "./helpers/Constants";
import { useAuth } from "provider/AuthContext";
import AppRouterProvider from "./routes/AppRoutesProvider";
import PrivateRoutes from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes";
import AppLoader from "./components/ui/loaders/AppLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "assets/css/tailwind.min.css";
import "assets/css/styles.min.css";

function App() {
  const { user } = useAuth();
  const isAuthenticated = !!user;

  const checkAuth = () => {
    if (isAuthenticated) {
      return redirect("/");
    } else {
      return redirect("/");
    }
  };

  const router = createBrowserRouter([checkAuth() ? PrivateRoutes() : {}, ...PublicRoutes()]);

  return (
    <div className="app-wrapper">
      <Suspense fallback={<AppLoader />}>
        <AppRouterProvider router={router} />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Suspense>
    </div>
  );
}

export default App;
