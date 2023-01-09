import React, { Component } from "react";
import "./MovieItem.css";
import store from "../../store";

class MovieItem extends Component {
  addmoive = (imdbID) => {
    store.dispatch({
      type: "ADDMOVIE",
      payload: {
        imdbID: imdbID,
      },
    });
  };
  render() {
    const { Title, Year, Poster, imdbID } = this.props;

    return (
      <article className="movie-item">
        <img className="movie-item__poster" src={Poster} alt={Title} />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button
            type="button"
            className="movie-item__add-button"
            onClick={() => this.addmoive(imdbID)}
          >
            Add to list
          </button>
        </div>
      </article>
    );
  }
}

export default MovieItem;
