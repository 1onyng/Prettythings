import React from "react";
import LikeContainer from "../like/like_container";

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
              <div onClick={() => this.props.openModal({ postId: post.id })}>
                <img className="feed-image" src={post.photoUrl} />
                <div className="title-span">{post.title}</div>
              </div>
          </div>
        </div>
      </li>
    );
  }

}

export default PostIndexItem
