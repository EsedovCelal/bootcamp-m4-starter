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
    id: "",
    value: "",
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
    console.log(this.state.movies);
    console.log(this.state.searchLine);
    e.target.className = this.state.displaynone;
    this.setState({ displaynone: "favorits_display_block" });
    const data = {
      title: this.state.searchLine,
      movies: this.state.movies,
    };
    fetch(`https://acb-api.algoritmika.org/api/movies/list `, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ id: res.id }));
  }
  render() {
    const { searchLine, movies, displaynone, id } = this.state;
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
              <div key={item.imdbID}>
                <li className="added_movie">
                  {item.Title} ({item.Year})
                  <button onClick={() => this.deleteMovie(item.imdbID)}>
                    delete
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
        <Link className={displaynone} to={"/list/" + id}>
          Go to the list
        </Link>
      </div>
    );
  }
}
export default Favorites;
