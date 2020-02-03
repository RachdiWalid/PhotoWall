import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  state = { message: "", key: null };
  handleSubmit = e => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const user = {
      password: password,
      username: username
    };
    this.props.Login(user);
  };
  render() {
    return (
      <div className="div-container">
        <h1>
          <Link to="/PhotoWall">PhotoWall</Link>{" "}
        </h1>
        <h5>Login</h5>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={() => {
                this.setState({ message: "" });
              }}
              autoComplete="off"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              autoComplete="off"
            />
            <p style={{ fontSize: "12px", color: "red" }}>
              {this.state.message}
            </p>
            <button
              type="submit"
              onClick={() => {
                setTimeout(() => {
                  this.setState({
                    ...this.state,
                    key: localStorage.getItem("key")
                  });
                  console.log(this.state.key);
                  if (this.state.key !== null) {
                    this.props.onHistory.history.push("/PhotoWall");
                    window.location.reload(false);
                  } else {
                    this.setState({
                      message: "Username/Password are incorrect !"
                    });
                  }
                }, 3000);
              }}
            >
              Login
            </button>
            <Link to="/Register" style={{ fontSize: 15 }}>
              Register Now
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
