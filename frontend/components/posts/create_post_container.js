import CreatePost from './create_post';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    // photo: "", title: ""
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
    fetchUser: (id) => dispatch(fetchUser(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);