import React, { Component } from "react";
// import store from "../../store";
import "./ListPage.css";
class ListPage extends Component {
  state = {
    movies: [],
    title: "",
    link: "https://www.imdb.com/title/",
  };
  componentDidMount() {
    const id = this.props.match.params;
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id.id}`)
      .then((data) => data.json())
      .then((data) =>
        this.setState({
          movies: data.movies,
          title: data.title,
        })
      );
  }
  render() {
    return (
      <div className="list-page">
        <h1 className="list-page__title">{this.state.title}</h1>
        <ul>
          {this.state.movies.map((item) => {
            return (
              <li key={item.imdbID}>
                <a
                  href={this.state.link + item.imdbID}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.Title} ({item.Year})
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
