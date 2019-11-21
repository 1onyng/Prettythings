import Profile from "../profile/profile";
import { fetchAllPosts, fetchProfilePosts } from "../../actions/post_actions";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { fetchUser } from "../../actions/user_actions";
import { createFollow, deleteFollow } from "../../actions/follows_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  let profileId = ownProps.match.params.userId;
  let profileUser = state.entities.users[state.session.id];
  let currentUser = state.entities.users[state.session.id];
  let userPosts = null;
  let profile_photo = profileUser.photo_url;

  if (profileUser) {
    userPosts = Object.values(state.entities.posts)
      .filter(post => post.user_id === profileUser.id);
  }

  return {
    profile_photo: profile_photo,
    userPosts: userPosts,
    profileId: profileId,
    profileUser: profileUser,
    currentUser: currentUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    fetchProfilePosts: userId => dispatch(fetchProfilePosts(userId)),
    logout: () => dispatch(logout()),
    fetchUser: user_id => dispatch(fetchUser(user_id)),
    createFollow: user_id => dispatch(createFollow(user_id)),
    deleteFollow: user_id => dispatch(deleteFollow(user_id)),
    openModal: data => dispatch(openModal("showPhoto", data)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
