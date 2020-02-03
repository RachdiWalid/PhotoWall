import React, { Component } from "react";
import { Link } from "react-router-dom";

class AddPhoto extends Component {
  state = {};
  handleSubmit = e => {
    e.preventDefault();
    const imageLink = e.target.elements.link.value;
    const description = e.target.elements.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: imageLink
    };
    if (description && imageLink) {
      this.props.startAddingPost(post);
      this.props.onHistory.push("/Photowall");
    }
  };

  render() {
    if (localStorage.getItem("key")) {
      return (
        <div className="div-container">
          <h1>
            <Link to="/PhotoWall">PhotoWall</Link>{" "}
          </h1>
          <h5>Add Photo</h5>
          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Link"
                name="link"
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="Description"
                name="description"
                autoComplete="off"
              />
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="div-container">
          <div className="form">
            <h1>
              <Link to="/PhotoWall">PhotoWall</Link>
            </h1>
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
        </div>
      );
    }
  }
}

export default AddPhoto;
