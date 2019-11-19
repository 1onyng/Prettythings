import CreatePost from './create_post';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
  });

const mapDispatchToProps = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post)),
    fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);