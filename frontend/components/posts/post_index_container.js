import Index from "./post_index";
import { fetchAllPosts } from "../../actions/post_actions";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: () => dispatch(fetchAllPosts()),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);