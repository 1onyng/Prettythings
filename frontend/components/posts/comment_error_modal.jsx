import React from "react";

class CommentErrorModal extends React.Component {
  render() {
    return (
      <div className="comment-error-modal">
        <span className="comment-error-text">Comment cannot be blank</span>
      </div>
    );
  }
}

export default CommentErrorModal;
