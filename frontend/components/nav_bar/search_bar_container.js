import { fetchUsers } from "../../actions/user_actions";
import { connect } from "react-redux";
import SearchBar from "./search_bar";

const mapStateToProps = state => {
  let users = Object.values(state.entities.users);
  return { users };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
