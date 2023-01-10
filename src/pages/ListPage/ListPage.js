import React, { Component } from "react";
import store from "../../store";
import "./ListPage.css";

class ListPage extends Component {
  state = {
    movies: [{ title: "The Godfather", year: 1972, imdbID: "tt0068646" }],
  };
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState();
      this.setState({
        movies: state.addedmovies,
      });
    });
  }
  // const id = this.props.match.params;
  // console.log(id);
  // TODO: запрос к сервер на получение списка
  // TODO: запросы к серверу по всем imdbID
  render() {
    console.log(this.state.movies);
    return (
      <div className="list-page">
        <h1 className="list-page__title">My list</h1>
        <ul>
          {this.state.movies.map((item) => {
            return (
              <li key={item.imdbID}>
                <a href="https://www.imdb.com/title/tt0068646/" target="_blank">
                  {item.title} ({item.year})
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListPage;
