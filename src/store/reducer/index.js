const DEFAULT_STATE = {
  setmovies: [],
  addmovie: [],
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "SETMOVIES":
      return {
        ...state,
        setmovies: action.payload.setmovies,
      };
    case "ADDMOVIE":
      const foundmovie = state.setmovies.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      const currentmovie = [...state.addmovie, foundmovie];

      return {
        ...state,
        addmovie: currentmovie,
      };
    case "DELMOVIE":
      return state;
    default:
      return state;
  }
};

export default reducer;
