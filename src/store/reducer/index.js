const DEFAULT_STATE = {
  setmovies: [],
  addedmovies: [],
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
      const samemovie = state.addedmovies.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (foundmovie !== samemovie) {
        const currentmovie = [...state.addedmovies, foundmovie];
        return {
          ...state,
          addedmovies: currentmovie,
        };
      }
      break;
    case "DELMOVIE":
      return state;
    default:
      return state;
  }
};
export default reducer;
