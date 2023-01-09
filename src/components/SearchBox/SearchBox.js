import React, { Component } from "react";
import "./SearchBox.css";
import store from "../../store";
class SearchBox extends Component {
  state = {
    searchLine: "",
  };
  searchLineChangeHandler = (e) => {
    this.setState({ searchLine: e.target.value });
  };
  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${this.state.searchLine}&apikey=382f90b0`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch({
          type: "SETMOVIES",
          payload: {
            setmovies: data.Search,
          },
        });
      });
  };
  test = () => {
    const state = store.getState();
    this.setState({ movies: state.setmovies });
    console.log(state.setmovies);
  };
  render() {
    const { searchLine } = this.state;

    return (
      <div className="search-box">
        <form
          className="search-box__form"
          onSubmit={this.searchBoxSubmitHandler}
        >
          <label className="search-box__form-label">
            Search movie by title:
            <input
              value={searchLine}
              type="text"
              className="search-box__form-input"
              placeholder="Example, Shawshank Redemption"
              onChange={this.searchLineChangeHandler}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!searchLine}
            onClick={this.test}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
