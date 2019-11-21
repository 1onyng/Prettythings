import { connect } from "react-redux";
import { fetchUser, deleteUser } from "../../actions/user_actions";
import { fetchProfilePosts } from "../../actions/post_actions";
import { logout } from "../../actions/session_actions";
import { createFollow, deleteFollow } from "../../actions/follows_actions";
import UserShow from "./user_show";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  const profileId = ownProps.match.params.userId;
  const profileUser = state.entities.users[profileId];

  let userPosts = null;
  let followerIds = null;
  let followStatus = false;
  let currentUser = state.entities.users[state.session.id];
  if (profileUser) {
    (userPosts = Object.values(state.entities.posts)
    .filter(post => post.user_id === profileUser.id)),
      (followerIds = profileUser.followerIds),
      (followStatus = followerIds.includes(currentUser.id));
  }

  return {
    currentUser,
    userPosts,
    profileUser,
    followerIds,
    followStatus
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchProfilePosts: id => dispatch(fetchProfilePosts(id)),
  fetchUser: userId => dispatch(fetchUser(userId)),
  deleteUser: id => dispatch(deleteUser(id)),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
  openModal: data => dispatch(openModal("showPhoto", data)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
