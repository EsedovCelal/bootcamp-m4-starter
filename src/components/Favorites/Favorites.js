import React, { Component } from "react";
import { Link } from "react-router-dom";
import store from "../../store";
import { deletemovie } from "../../store/action";
import "./Favorites.css";

class Favorites extends Component {
  state = {
    movies: [],
    searchLine: "",
    displaynone: "favorits_display_none",
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
  push_save_list_button(e) {
    e.target.className = this.state.displaynone;
    this.setState({ displaynone: "favorits_display_block" });
  }
  render() {
    const { searchLine, movies, displaynone } = this.state;
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
        <button
          disabled={!searchLine && movies}
          type="button"
          className="favorites__save-submit"
          onClick={(e) => {
            this.push_save_list_button(e);
          }}
        >
          Save list
        </button>
        <Link className={displaynone} to="/list/:id">
          Go to the list
        </Link>
      </div>
    );
  }
}
export default Favorites;
