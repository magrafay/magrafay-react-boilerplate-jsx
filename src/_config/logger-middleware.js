import { APP_ENV } from "../helpers/constants";

/* eslint no-console: off */
// eslint-disable-next-line
export default () => (next) => (action) => {
  if (APP_ENV === "local") {
    const { type, value } = action;
    console.groupCollapsed(type, value);

    console.groupEnd();
  }

  return next(action);
};
