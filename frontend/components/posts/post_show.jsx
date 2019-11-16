import React from "react";
import { Link } from "react-router-dom";
import LikesContainer from "../like/like_container";


class PostShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPost(this.props.post.id);
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  handleDelete(e) {
    e.preventDefault();
    this.props.deletePost(this.props.post.id)
  }
  
  render() {
    if (!this.props.post) {
      return <h2>Loading...</h2>;
    }

  const { photoUrl, author, title, user_id, likers, authorPhotoUrl } = this.props.post;
    
    return (
      <div>
        <div className="post-box">
          <img className="post-show-image" src={photoUrl} />
          <div className="post-show-detail-box">
            <div className="post-author">
              {/* <div className="post-author-links">
                <Link className="author-link" to={`/users/${user_id}`}>
                  <img className="feed-profile-pic" src={authorPhotoUrl} />
                  {author}
                </Link>
              </div> */}
              <div className="post-author-delete">
                {user_id === this.props.user.id ||
                  this.props.currentUser.username === "pretty_things_admin" ?(
                    <button className="delete-button" onClick={this.handleDelete}>
                      Delete <i className="fas fa-trash-alt"></i>
                    </button>
                  ) : (
                    <div></div>
                  )}
              </div>
            </div>
            {/* <div className="post-comments">
              <span>
                {title ? (
                  <div className="post-bio">
                    <Link
                      onClick={this.closeModal}
                      className="profile-link"
                      to={`/users/${user_id}`}
                    >
                      {author}
                    </Link>
                    &nbsp;{title}
                  </div>
                ) : (
                    <div></div>
                  )}
              </span>
              <span>{postComments}</span>
            </div> */}
            <div className="post-show-likes">
              <div className="likes-div">
                <div className="show-buttons">
                  <LikesContainer post={this.props.post} likers={likers} />
                  <i
                    className="fas fa-paw show-icon"
                    onClick={this.handleComment}
                  ></i>
                </div>
                <div className="show-likecount">
                  {likers.length === 1
                    ? `${likers.length} like`
                    : `${likers.length} likes`}
                </div>
              </div>
              {/* <div className="show-comment-container">
                <form className="show-comment-form">
                  <input
                    className="show-textarea"
                    value={this.state.title}
                    onChange={this.update("title")}
                    placeholder="Add a comment..."
                  ></input>
                  <button
                    className="submit-comment-button"
                    onClick={this.handleComment}
                  >
                    Post
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );


  }

}
export default PostShow;
