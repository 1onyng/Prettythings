import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/likes_actions";
import Like from "./like";
import { fetchPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  post: ownProps.post
});

const mapDispatchToProps = dispatch => {
  return {
    createLike: like => dispatch(createLike(like)),
    deleteLike: id => dispatch(deleteLike(id)),
    fetchPost: id => dispatch(fetchPost(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Like);
