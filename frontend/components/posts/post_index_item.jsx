import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { post } = this.props;

    return (
      <div>
        <li>{post.title}</li>
        <img src={post.photoUrl} />
      </div>
    );
  }
}

export default PostIndexItem
