import React from "react";
// import { connect } from "react-router";
import { Link } from "react-router-dom";
class ProfileIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  // componentDidMount() {
  //     this.props.fetchPost(this.props.post.id)
  // }

  render() {
    return (
      <div className="image-container">
        {/* <Link to={`/posts/${this.props.id}`}>
          <img className="user-page-photos" src={this.props.photo_url}></img>
          <div className="image-overlay">
            <p className="image-overlay-text">
              <span className="overlay-heart">&#9829;</span>
              {post.likers ? post.likers.length : 0}
              <i className="fas fa-comment" aria-hidden="true">
                &#x1f4ac;
              </i>
              {post.commentIds ? post.commentIds.length : 0}
            </p>
          </div>
        </Link> */}
      </div>
    );
  }
}
export default ProfileIndexItem;
