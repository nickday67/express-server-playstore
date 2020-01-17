import React, { Component } from "react";
import Playapp from "../playstore/Playapp";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playstore: [],
      search: "",
      sort: "",
      error: null
    };
  }

  setSearch(search) {
    this.setState({
      search
    });
  }

  setSort(sort) {
    this.setState({
      sort
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = "http://localhost:8000/apps";
    const params = [];
    if (this.state.search) {
      params.push(`search=${this.state.search}`);
    }
    if (this.state.sort) {
      params.push(`sort=${this.state.sort}`);
    }
    const query = params.join("&");
    const url = `${baseUrl}?${query}`;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          playstore: data,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          error: "Sorry, could not get books at this time."
        });
      });
  }

  render() {
    return (
      <main className="App">
        <h1>Google Playstore Apps</h1>
        <div className="search">
          <form onSubmit={e => this.handleSubmit(e)}>
            <label htmlFor="search">Search: </label>
            <input
              type="text"
              id="search"
              name="search"
              value={this.state.search}
              onChange={e => this.setSearch(e.target.value)}
            />
          </form>
        </div>
        <Playapp />
      </main>
    );
  }
}

export default App;