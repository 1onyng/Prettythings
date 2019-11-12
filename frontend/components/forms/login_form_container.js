import { connect } from 'react-redux';
import { login, receiveResetErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    formType: 'Log in',
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processDemo: user => dispatch(login(user)),
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(receiveResetErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);