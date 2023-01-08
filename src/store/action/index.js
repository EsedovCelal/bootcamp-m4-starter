export const setmovies = (param) => {
  return {
    type: "SETMOVIES",
    payload: param,
  };
};
export const addmovie = () => {
  return {
    type: "ADDMOVIE",
  };
};
export const delmovie = () => {
  return {
    type: "DELMOVIE",
  };
};
