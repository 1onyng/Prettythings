import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { post } = this.props;

    return (
      <li className="feed-image-box">
        <div className="feed-image-header">
          <div className="feed-image-header-wrap">
            </div>
              <img className="feed-image" src={post.photoUrl} />
              <div className="title-span">{post.title}</div>
            <div className="feed-image-bottom">
          </div>
        </div>
      </li>
    );
  }

}

export default PostIndexItem
