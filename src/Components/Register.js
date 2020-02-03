import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value;

    if (username && password) {
      this.props.addUser({ username, password });
      this.props.onHistory.push("/");
    }
  };
  render() {
    return (
      <div className="div-container">
        <h1>
          <Link to="/PhotoWall">PhotoWall</Link>{" "}
        </h1>
        <h5>Register Now</h5>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Add an username"
              name="username"
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Add a password"
              name="password"
            />
            <button type="submit">Rgister</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
