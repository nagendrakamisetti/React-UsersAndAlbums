import React, { Component } from "react";
import axios from "axios";
import User from "./User";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
      this.setState({ users: response.data });
      //console.log("Users Data ", this.state.users);
    });
  }

  render() {
    return (
      <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
        {this.state.users.map(user => {
          return (
            <li style={{ padding: "10px" }} className="user">
              <User {...user} />
            </li>
          );
        })}
      </ul>
    );
  }
}
