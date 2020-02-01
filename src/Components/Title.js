import React, { Component } from "react";
import { Link } from "react-router-dom";

class Title extends Component {
  state = {};
  render() {
    return (
      <h1>
        <Link to="/">{this.props.title}</Link>
      </h1>
    );
  }
}

export default Title;
