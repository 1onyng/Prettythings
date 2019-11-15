import React from "react";

class Like extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleLike = this.handleLike.bind(this);
    this.handleUnlike = this.handleUnlike.bind(this);
  }

  handleUnlike(e) {
    e.preventDefault();

    this.props.deleteLike(this.props.post.id).then(() => {
      this.props.fetchPost(this.props.post.id);
    });
  }
  handleLike(e) {
    e.preventDefault();
    this.props.createLike({ post_id: this.props.post.id }).then(() => {
      this.props.fetchPost(this.props.post.id);
    });
  }

  render() {
    return (
      <div>
        <div className="like-button-div">
          <div className="like-button">
            {this.props.post.likers.includes(this.props.currentUser.id) ? (
              <div className="like-button-liked" onClick={this.handleUnlike}>
                <span className="like-icon">&#9829;</span>
              </div>
            ) : (
                <div className="like-button-unliked" onClick={this.handleLike}>
                  <span>&#9825;</span>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default Like;
