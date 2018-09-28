import React, { Component } from "react";
import styled from "styled-components";

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

export default class LeftNavigation extends Component {
  handleOnClick = value => {
    //console.log("Hello World 11", value);
    // alert("Hello World 11"+value);
    this.props.onChange(value);
  };

  render() {
    return (
      <StyledUl>
        <li onClick={() => this.handleOnClick("Users")}>Users</li>
        <li onClick={() => this.handleOnClick("Albums")}>Albums</li>
        <li onClick={() => this.handleOnClick("Gallery")}>Gallery</li>
        <li onClick={() => this.handleOnClick("AddUser")}>Add User</li>
      </StyledUl>
    );
  }
}
