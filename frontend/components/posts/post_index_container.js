import PostIndex from "./post_index";
import { fetchAllPosts } from "../../actions/post_actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    posts: Object.values(state.entities.posts),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);