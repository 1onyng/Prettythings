import PostIndexItem from "./post_index_item";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchPost, deletePost } from "../../actions/post_actions";
import { deleteComment, createComment, fetchPostComments, clearErrors } from "../../actions/comment_actions";

const mapStateToProps = state => {
  let comments;
  if (state.entities.comments) {
    comments = Object.values(state.entities.comments);
  }
  return {
    currentUser: state.entities.users[state.session.id],
    comments
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(deletePost(id)),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal()),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
    openErrorModal: data => dispatch(openModal("commentError", data)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem);
