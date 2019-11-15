import { connect } from "react-redux";
import PostShow from "./post_show";
import { fetchPost, deletePost } from "../../actions/post_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.users[state.session.id],
  post: state.entities.posts[ownProps.data.postId]
});

const mapDispatchToProps = function (dispatch) {
  return {
    deletePost: postId => dispatch(deletePost(postId)),
    fetchPost: postId => dispatch(fetchPost(postId)),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
