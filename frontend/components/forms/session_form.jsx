import React from 'react';
import { Link } from 'react-router-dom';

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }
  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  demoUser(e) {
    e.preventDefault();
    this.props.processDemo({
      username: 'hunter02',
      password: 'hunter02'
    })
  }

  renderErrors() {
    return (
      <ul className="login-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // const errors = this.props.errors.map((error, i) => {
    //   return <li key={i}>{error}</li>
    // });

    let link; 
    let path;
    let instruct;
    let greet;

    if (this.props.formType === 'Log in') {
      link = 'Sign Up';
      path = '/signup';
      instruct = "Don't have an account? "
      greet = ''
    } else {
      link = 'Log in';
      path = '/login';
      instruct = "Have an account? "
      greet = 'Sign up to see photos and videos from your friends.'
    }

    return (
      <div className="login-page-container">
        <div className="login-left">
          <div className="login-left-image-container">
            <img
              className="login-left-image"
              src="https://www.instagram.com/static/images/homepage/home-phones@2x.png/9364675fb26a.png"
            />
            <img
              className="login-left-image-inner"
              src="https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg"
            />
          </div>
        </div>      
        <div className="login-right">
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit}>
              <h1 className="logo">Pretty Things</h1>
              <div className="login-form">
                <p className="greet">{greet}</p>           
                <label>
                  <input 
                    className="login-input"
                    type="text"
                    onChange={this.update("username")}
                    placeholder="Username"
                    value={this.state.username}
                  />
                </label>
                <br/>
                <label>
                  <input 
                    className="login-input"
                    type="password"
                    onChange={this.update("password")}
                    placeholder="Password"
                    value={this.state.password}
                  />
                </label>
                <br/>
                <button 
                  className="button login">
                  {this.props.formType}
                </button>
                <br/>
                &nbsp;OR&nbsp;
                <br/>
                <button 
                  className="button demo"
                  onClick={this.demoUser}>
                  Demo Log in 
                </button>
                <div className="login-errors-ul">
                  {this.renderErrors()}
                </div>
              </div> 
            </form>
          </div>
          <div className="login-signup-link">
            <div>
              {instruct}
              <Link to={path}>{link}</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

}