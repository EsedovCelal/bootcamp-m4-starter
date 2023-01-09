import React, { Component } from "react";
import store from "../../store";
import "./Favorites.css";

class Favorites extends Component {
  state = {
    movies: [{ imdbID: "tt0068646", Title: "The Godfather", Year: 1972 }],
  };
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({
        movies: state.addmovies,
      });
    });
  }
  render() {
    return (
      <div className="favorites">
        <input value="New list" className="favorites__name" />
        <ul className="favorites__list">
          {this.state.movies.map((item) => {
            return (
              <li key={item.imdbID}>
                {item.Title} ({item.Year})
              </li>
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
