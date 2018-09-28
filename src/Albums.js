import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Album from "./Album";
import _ from "lodash";

const StyledUl = styled.div`
  list-style-type: none;
  padding: 0;
  width: 100%;

  li {
    padding: 10px;
  }

  li.active {
    color: #ffffff;
    background-color: red;
  }

  li:hover {
    background-color: tomato;
    cursor: pointer;
  }
`;

class Albums extends Component {
  state = { albums: [], photos: [], isTitleSelected: false };
  albums = [];

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/albums`).then(res => {
      this.albums = res.data;
      this.setState({ albums: this.albums });
    });
  }

  filterAlbums(searchQuery) {
    if (!searchQuery) {
      this.searchBox.value = "";
      this.setState({ albums: this.albums });
      return;
    }

    const albums = this.state.albums.filter(al => {
      return al.title.indexOf(searchQuery) > 0;
    });

    this.setState({ albums });
  }

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <input
          ref={node => (this.searchBox = node)}
          type="text"
          style={{ width: "300px", padding: "10px" }}
          onChange={event => this.filterAlbums(event.target.value)}
        />
        <button
          type="button"
          style={{ padding: "10px" }}
          onClick={event => this.filterAlbums()}
        >
          Clear
        </button>

        <ul style={{ listStyleType: "none", margin: "0", padding: "5px" }}>
          {_.map(this.state.albums, album => (
            <Album key={album.id} {...album} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Albums;
