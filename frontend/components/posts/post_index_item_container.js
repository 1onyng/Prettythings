import PostIndexItem from "./post_index_item";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";
import { fetchPost, deletePost } from "../../actions/post_actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    deletePost: id => dispatch(deletePost(id)),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostIndexItem);
