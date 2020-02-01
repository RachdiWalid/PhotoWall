import React, { Component } from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {
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
  }
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PhotoWall;
