import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      isPostSelected: false,
      postComment: "abc"
    };
  }

  onClickHandler() {
    this.setState(prevState => {
      return { isPostSelected: !prevState.isPostSelected };
    });
  }

  render() {
    return (
      <div>
        <li>
          <a onClick={this.onClickHandler}> {this.props.title} </a>
          <div>
            {this.state.isPostSelected && "Comment: " + this.props.body}
          </div>
        </li>
      </div>
    );
  }
}

export default Post;
