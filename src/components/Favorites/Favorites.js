import React, { Component } from "react";
import store from "../../store";
import { deletemovie } from "../../store/action";
import "./Favorites.css";

class Favorites extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({
        movies: state.addedmovies,
      });
    });
  }
  deleteMovie(imdbID) {
    store.dispatch(deletemovie(imdbID));
  }
  render() {
    return (
      <div className="favorites">
        <input value="New list" className="favorites__name" />
        <ul className="favorites__list">
          {this.state.movies.map((item) => {
            return (
              <div>
                <li key={item.imdbID} className="added_movie">
                  {item.Title} ({item.Year})
                  <button onClick={() => this.deleteMovie(item.imdbID)}>
                    x
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
        <button type="button" className="favorites__save">
          Save list
        </button>
      </div>
    );
  }
}

export default Favorites;
