import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LikesContainer from "../like/like_container";

function PostShow(props) {
  const [commentBody, setCommentBody] = useState('');
  const { photoUrl, author, body, user_id, likers, authorPhotoUrl } = props.post;

  useEffect(() => {
    props.fetchPost(props.post.id);
    props.fetchPostComments(props.post.id);
    props.clearErrors();
  }, []) 

  function update(field) {
    if (field === "body") return e => setCommentBody(e.target.value);
  }

  function closeModal(e) {
    e.preventDefault();
    props.closeModal();
  }

  function handleDelete(e) {
    e.preventDefault();
    window.confirm("Delete post?") &&
      props.deletePost(props.post.id)
        .then(() => { props.closeModal() })
        .then(() => { props.history.push("/my-profile") })
  }

  function handleComment(e) {
    e.preventDefault();
    const comment = { body: commentBody, post_id: props.post.id };
    props.createComment(comment)
      .then(() => { props.fetchPost(props.post.id) })
      .then(() => { props.clearErrors() })
    setCommentBody('');
  }

  function renderErrors() {
    if (props.errors && props.errors.length > 0) {
      return (
        <ul className="login-errors modal-errors">
          {props.errors.map((error, i) => (
            <li key={`error-${i}`}>{error}</li>
          ))}
        </ul>
      );
    }
  }
  
  if (!props.post) {
    return <h2>Loading...</h2>;
  }

  let postComments = Object.values(props.post.comments).map(comment => {
    return (
      <div
        key={Math.abs(comment.id - comment.user_id / 3)}
        className="post-show-comment"
      >
        <Link className="profile-link" to={`/users/${comment.user_id}`}>
          {comment.author}
        </Link>
        <span className="comment-body">&nbsp;{comment.body}</span>
        {comment.user_id === props.user.id ? (
          <button
            className="delete-comment-button"
            onClick={() =>
              props.deleteComment(comment.id)
                .then(() => { props.fetchPost(props.post.id) })
                .then(() => props.clearErrors())}
          >
            X
          </button>
        ) : (
            <div></div>
          )}
      </div>
    );
  });
    
  return (
    <div>
      {renderErrors()}
      <div className="post-box">
        <img className="post-show-image" src={photoUrl} />
        <div className="post-show-detail-box">
          <div className="post-author">
            <div className="post-author-links">
              <Link className="author-link" to={`/users/${user_id}`}>
                <img className="feed-profile-pic" src={authorPhotoUrl} />
                {author}
              </Link>
            </div>
            <div className="post-author-delete">
              {user_id === props.user.id ||
                props.user.username === "pretty_things_admin" ?(
                  <button 
                    className="delete-button" 
                    onClick={handleDelete}>
                  <i className="fas fa-trash-alt"></i>
                  </button>
                ) : (
                  <div></div>
                )}
            </div>
          </div>
          <div className="post-comments">
            <span>
              {body ? (
                <div className="post-bio">
                  <Link
                    onClick={closeModal}
                    className="profile-link"
                    to={`/users/${user_id}`}
                  >
                    {author}
                  </Link>
                  &nbsp;{body}
                </div>
              ) : (
                  <div></div>
                )}
            </span>
            <span>{postComments}</span>
          </div>
          <div className="post-show-likes">
            <div className="likes-div">
              <div className="show-buttons">
                <LikesContainer post={props.post} likers={likers} />
                <i
                  className="far fa-comment-alt"
                  onClick={handleComment}
                ></i>
              </div>
              <div className="show-likecount">
                {likers.length === 1
                  ? `${likers.length} like`
                  : `${likers.length} likes`}
              </div>
            </div>
            <div className="show-comment-container">
              <form className="show-comment-form">
                <input
                  className="show-textarea"
                  value={commentBody}
                  onChange={update("body")}
                  placeholder="Add a comment..."
                ></input>
                <button
                  className="submit-comment-button"
                  onClick={handleComment}
                >
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PostShow;

