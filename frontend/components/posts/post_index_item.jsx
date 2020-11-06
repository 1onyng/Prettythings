import React, { useState } from "react";
import LikeContainer from "../like/like_container";
import { Link } from "react-router-dom";

function PostIndexItem(props) {
  const [body, setBody] = useState("");

  function handleComment(e) {
    e.preventDefault();
    if (body !== "") {
      const comment = { body: body, post_id: props.post.id };
      props.createComment(comment);
      props.fetchPost(props.post.id);
      setBody("");
    } else {
      props.openErrorModal();
    }
  }

  function update(field) {
    if (field === "body") return e => setBody(e.target.value);
  }


  let { post } = props;
  let commentPosts = Object.values(post.comments).map(comment => {
    return (
      <div key={comment.id} className="post-show-comment">
        <Link className="feed-profile-link" to={`/users/${comment.user_id}`}>
          {comment.author}
        </Link>
        <span className="comment-bo">&nbsp;{comment.body}</span>
      </div>
    );
  });
  let limitPosts = [];
  while (limitPosts.length < 3) {
    limitPosts.push(commentPosts.shift());
  }

  return(
      <li className = "feed-image-box" >
      <div className="feed-image-header">
        <div className="feed-image-header-wrap">
          <img className="feed-profile-pic" src={post.authorPhotoUrl} />
          <Link className="profile-link" to={`/users/${post.user_id}`}>
            {post.author}
          </Link>
        </div>
        <div onClick={() => props.openModal({ postId: post.id })}>
          <img className="feed-image" src={post.photoUrl} />
          <div className="title-span">{post.title}</div>
        </div>
        <div className="feed-image-bottom">
          <div className="feed-image-bottom-likes">
            <LikeContainer post={post} likers={post.likers} />
            <div className="likes">
              {post.likers.length === 1
                ? `1 like`
                : `${post.likers.length} likes`}
            </div>
          </div>
          <div className="feed-image-bottom-bio"></div>
          <div className="feed-image-bottom-comments">{limitPosts}</div>
          <div className="feed-image-comment-input">
            <form className="feed-comment-form">
              <input
                className="feed-textarea"
                value={body}
                onChange={update("body")}
                placeholder="Add a comment..."
              ></input>
              <button
                className="submit-comment-button-index"
                onClick={handleComment}
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </div>
      </li>
  );
}

export default PostIndexItem

  

  
