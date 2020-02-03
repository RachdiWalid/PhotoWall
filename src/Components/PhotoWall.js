import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {
    const key = localStorage.getItem("key");
    if (key) {
      return (
        <div>
          <Link to="/AddPhoto" className="addIcon"></Link>
          <div className="photoGrid">
            {this.props.posts
              .sort((x, y) => {
                return y.id - x.id;
              })
              .map((post, i) => {
                return <Photo post={post} key={i} {...this.props} index={i} />;
              })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="form">
          <p style={{ fontSize: 20, color: "red" }}>
            You must be logged in to add photos into your PhotoWall
          </p>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "grey",
              fontSize: "20px"
            }}
          >
            Login now
          </Link>
        </div>
      );
    }
  }
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PhotoWall;
