import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route } from "react-router-dom";
import Single from "./Single";

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
        <Route
          exact
          path="/"
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
