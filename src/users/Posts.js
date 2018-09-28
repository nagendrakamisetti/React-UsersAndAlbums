import React, { Component } from "react";
import axios from "axios";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      moreDetail: false,
      posts: [],
      filterdPosts: [],
      searchTerm: ""
    };
  }

  onInputChange(term) {
    console.log("Search term --->", term);
    const filterResult = this.state.posts.filter(post => {
      if (post.title.includes(term)) {
        console.log("iterating ", post.title);
        return true;
      }
    });
    this.setState({ filterdPosts: filterResult, searchTerm: term });
    console.log("search result ", filterResult);
  }

  onClickHandler() {
    console.log("more detail value --->", this.state.moreDetail);
    if (this.state.moreDetail) {
      this.setState({
        moreDetail: false
      });
    } else {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${
            this.props.userId
          }/posts`
        )
        .then(response => {
          this.setState({
            posts: response.data,
            moreDetail: true,
            searchTerm: ""
          });
        });
    }
  }
  render() {
    let searchResults = this.state.posts;

    if (this.state.searchTerm.length !== 0) {
      searchResults = this.state.filterdPosts;
    }
    return (
      <div>
        <button onClick={this.onClickHandler}>Posts</button>
        {this.state.moreDetail && (
          <div style={{ borderTop: "1px solid #ffffff" }}>
            <div>
              <input
                type="text"
                onChange={event => this.onInputChange(event.target.value)}
              />
            </div>
            <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
              {searchResults.map(post => {
                return (
                  <li style={{ padding: "10px" }} className="user">
                    <Post {...post} />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
