export function deletemovie(imdbID) {
  return {
    type: "DELETEMOVIE",
    payload: {
      imdbID: imdbID,
    },
  };
}
