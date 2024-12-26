import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError();
  return (
    <div className="d-flex flex flex-col justify-center items-center py-12 min-h-screen">
      <h1 className="text-red-700 text-8xl ">404</h1>
      <p
        className="text-center text-red-300 text-2xl"
        // style={{ color: "red", fontSize: "24px" }}
      >
        Page Not Found
      </p>
      <small text-center py-5 text-red-400>
        {error}
      </small>
    </div>
  );
}
