import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      isPostSelected: false
    };
  }

  onClickHandler() {
    this.setState(prevState => {
      return { isPostSelected: !prevState.isPostSelected };
    });
  }

  render() {
    return (
      <div
        style={{
          "background-color": this.props.completed ? "green" : ""
        }}
      >
        {this.props.title}
      </div>
    );
  }
}

export default ToDo;
