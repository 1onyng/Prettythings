import { connect } from 'react-redux';
import { signup, login, receiveResetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    formType: 'Sign Up',
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processDemo: user => dispatch(login(user)),
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveResetErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);