import React, { Component } from "react";
import axios from "axios";
import ToDo from "./ToDo";

class ToDos extends Component {
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
    // console.log("Search term --->", term);
    const filterResult = this.state.posts.filter(post => {
      if (post.title.includes(term)) {
        console.log("iterating ", post.title);
        return true;
      }
    });
    this.setState({ filterdPosts: filterResult, searchTerm: term });
    //console.log("search result ", filterResult);
  }

  onClickHandler() {
    // console.log("more detail value --->", this.state.moreDetail);
    if (this.state.moreDetail) {
      this.setState({
        moreDetail: false
      });
    } else {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${
            this.props.userId
          }/todos`
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
    // console.log("Main result ", this.state.posts);
    //console.log("Main result ", this.state.filterdPosts);
    if (this.state.searchTerm.length !== 0) {
      searchResults = this.state.filterdPosts;
    }
    return (
      <div>
        <button onClick={this.onClickHandler}>ToDo</button>
        {this.state.moreDetail && (
          <div>
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
                    <ToDo {...post} />
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

export default ToDos;
