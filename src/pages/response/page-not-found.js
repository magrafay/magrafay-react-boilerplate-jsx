import { useRouteError } from "react-router-dom";
import { ReactComponent as PageNotFoundImage } from "../../assets/images/page-not-found.svg";

export default function PageNotFound() {
  const error = useRouteError();
  return (
    <div className="d-flex flex justify-center items-center">
      <PageNotFoundImage height={300} />
      <p
        className="text-center py-5 text-red-400 font-size-[24px]"
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
