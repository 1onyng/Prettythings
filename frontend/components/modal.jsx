import React from "react";
import { closeModal } from "../actions/modal_actions";
import { connect } from "react-redux";
import PostShowContainer from "./posts/post_show_container";
import CommentErrorModal from "./posts/comment_error_modal";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.type) {
    case "showPhoto":
      component = <PostShowContainer data={modal.data} />;
      break;
    case "commentError":
      component = <CommentErrorModal />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
