import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../store";
import { deletemovie } from "../../store/action";
import "./Favorites.css";

class Favorites extends Component {
  state = {
    movies: [],
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
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
    const { searchLine, movies } = this.state;
    return (
      <div className="favorites">
        <input
          onChange={this.searchLineChangeHandler}
          value={searchLine}
          placeholder="New list"
          className="favorites__name"
          type="text"
        />
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
        <Link to="/list/:id">
          <button
            disabled={!searchLine && movies}
            type="button"
            className="favorites__save-submit"
          >
            Save list
          </button>
        </Link>
      </div>
    );
  }
}

export default Favorites;
