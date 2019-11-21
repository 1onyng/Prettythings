import { connect } from "react-redux";
import UserUpdateForm from "./user_update_form";
import { updateUser } from "../../actions/user_actions";

const mapStateToProps = state => {
  let currentUser = state.entities.users[state.session.id];
  let userId = currentUser.id;
  return {
    currentUser,
    userId
  };
};

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserUpdateForm);
