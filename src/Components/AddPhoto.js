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
      this.props.onHistory.push("/");
    }
  };
  render() {
    return (
      <div className="div-container">
        <h1>
          <Link to="/">PhotoWall</Link>{" "}
        </h1>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Link" name="link" />
            <input type="text" placeholder="Description" name="description" />
            <button type="submit">Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddPhoto;
