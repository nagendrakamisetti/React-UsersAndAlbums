import React, { Component } from "react";
import axios from "axios";

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreDetail: false,
      hover: false,
      albumPhotos: []
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({ hover: true });
  }
  hoverOff() {
    this.setState({ hover: false });
  }

  handleOnClick = albumId => {
    console.log("OnClick --- " + albumId);
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${albumId}`)
      .then(res => {
        this.albumPhotos = res.data;
        this.setState(prevState => {
          return {
            albumPhotos: this.albumPhotos,
            moreDetail: !prevState.moreDetail
          };
        });
      });
  };

  render() {
    return (
      <div>
        <ul
          className={this.state.hover ? "variety" : ""}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          style={{ padding: "10px" }}
          onClick={this.handleOnClick(this.props.id)}
        >
          {this.props.title}
        </ul>
        <div>
          {this.state.moreDetail && <div>{this.state.albumPhotos.id}</div>}
        </div>
      </div>
    );
  }
}

export default Album;
