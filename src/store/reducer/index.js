const DEFAULT_STATE = {
  setmovies: [],
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SETMOVIES":
      return {
        ...state,
        setmovies: action.payload.setmovies,
      };
    case "ADDMOVIE":
      return state;
    case "DELMOVIE":
      return state;
    default:
      return state;
  }
};

export default reducer;
