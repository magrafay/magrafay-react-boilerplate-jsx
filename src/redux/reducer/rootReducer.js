const intialState = {
  loading: true,
  error: false,
  data: {},
};
const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    /* ------------------ NAVIGATION -------------------------------- */
    case "LOADING":
      return { ...state, loading: action.value };
    case "ERROR":
      return { ...state, error: action.value };
    case "DATA":
      return { ...state, data: action.value };
  }

  return state;
};
export default rootReducer;
