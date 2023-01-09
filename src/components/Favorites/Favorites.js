import React, { Component } from "react";
import store from "../../store";
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
  render() {
    return (
      <div className="favorites">
        <input value="New list" className="favorites__name" />
        <ul className="favorites__list">
          {this.state.movies.map((item) => {
            return (
              <div>
                <li key={item.imdbID}>
                  {item.Title} ({item.Year})
                </li>
                <button>delete</button>
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
