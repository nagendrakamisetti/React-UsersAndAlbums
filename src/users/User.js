import React, { Component } from "react";
import Posts from "./Posts";
import ToDos from "./ToDos";

class User extends Component {
  constructor(props) {
    super(props);
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
    this.state = {
      moreDetail: false,
      hover: false
    };
  }

  hoverOn() {
    this.setState({ hover: true });
  }
  hoverOff() {
    this.setState({ hover: false });
  }
  render() {
    return (
      <div>
        <section
          className={this.state.hover ? "variety" : ""}
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          onClick={() =>
            this.setState(prevState => {
              return { moreDetail: !prevState.moreDetail };
            })
          }
        >
          <div>
            <img width="100px" src={require("../assets/img/user.png")} />
            <div style={{ display: "inline-block", padding: "10px" }}>
              <p>Name: {this.props.name} </p>
              Email:
              <a href={`mailTo:${this.props.email}`}>{this.props.email}</a>
              <p>Company: {this.props.company.name} </p>
            </div>
          </div>
        </section>
        <Posts userId={this.props.id} /> <ToDos userId={this.props.id} />
        <div>
          {this.state.moreDetail && (
            <address style={{ borderTop: "1px solid #ffffff" }}>
              <p>{this.props.address.street}</p>
              <p>{this.props.address.suite}</p>
              <p>
                {this.props.address.city} - {this.props.address.zipcode}
              </p>
            </address>
          )}
        </div>
      </div>
    );
  }
}

export default User;
