import React, { Component } from "react";
import logo from "./logo.svg";
import LeftNavigation from "./LeftNavigation";
import Users from "./users/Users";
import Albums from "./Albums";
import Gallery from "./Gallery";
import AddUser from "./users/AddUser";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeDetComp: "Users" };
  }

  handleOnChange = value => {
    console.log("Hello World ", value);
    this.setState({ activeDetComp: value });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <span className="title">React component interaction</span>
        </header>
        <div className="container">
          <div className="leftNavigation">
            <LeftNavigation onChange={this.handleOnChange} />
          </div>
          <div className="content">
            {this.state.activeDetComp === "Users" && <Users />}
            {this.state.activeDetComp === "Albums" && <Albums />}
            {this.state.activeDetComp === "Gallery" && <Gallery />}
            {this.state.activeDetComp === "AddUser" && <AddUser />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
