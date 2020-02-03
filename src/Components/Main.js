import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import Single from "./Single";
import Login from "./Login";
import Register from "./Register";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentDidMount() {
    this.props.startLoadingPost().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <div>
        {localStorage.getItem("key") && (
          <div className="logout">
            <p>
              Hello{" "}
              <span style={{ fontWeight: "bold" }}>
                {localStorage.getItem("username")}
              </span>{" "}
              ! Welcome to your PhotoWall ...
            </p>
            <button
              className="btn-logout"
              onClick={() => {
                localStorage.clear();
                this.props.history.push("/");
              }}
            >
              Logout
            </button>
          </div>
        )}
        <Route
          exact
          path="/"
          render={history => {
            return <Login onHistory={history} {...this.props} />;
          }}
        />

        <Route
          exact
          path="/Register"
          render={({ history }) => (
            <Register onHistory={history} {...this.props} />
          )}
        />
        <Route
          exact
          path="/PhotoWall"
          render={() => (
            <div className="div-container">
              <Title title={"PhotoWall"} />
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={params => (
            <div className="div-container">
              <Title title={"PhotoWall"} />
              <Single
                loading={this.state.loading}
                {...this.props}
                {...params}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default Main;
