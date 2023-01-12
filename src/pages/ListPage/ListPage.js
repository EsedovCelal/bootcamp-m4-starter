import React, { Component } from "react";
import "./ListPage.css";
import Header from "../../components/Header/Header";
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
        <Header />
        <h1 className="list-page__title">You list name : {this.state.title}</h1>
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
                  <hr />
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
