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
      if (!samemovie) {
        const currentmovie = [...state.addedmovies, foundmovie];
        return {
          ...state,
          addedmovies: currentmovie,
        };
      } else {
        return {
          ...state,
        };
      }
    case "DELETEMOVIE":
      const addedmovies = state.addedmovies.filter(
        (wantdelete) => wantdelete.imdbID !== action.payload.imdbID
      );
      return {
        ...state,
        addedmovies,
      };
    default:
      return state;
  }
};
export default reducer;
