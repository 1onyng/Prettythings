import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SessionForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    props.clearErrors();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, { username, password });
    props.processForm(user);
  }

  function update(field) {
    if (field === "username") {
      return e => setUsername(e.currentTarget.value);
    } else if (field === "password") {
      return e => setPassword(e.currentTarget.value);
    }    
  }

  function demoUser(e) {
    e.preventDefault();
    props.processDemo({
      username: 'demo_user',
      password: 'hunter02'
    })
  }

  function renderErrors() {
    return (
      <ul className="login-errors">
        {props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  let link; 
  let path;
  let instruct;
  let greet;

  if (props.formType === 'Log in') {
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
          <form onSubmit={handleSubmit}>
            <h1 className="login-logo">Pretty Things</h1>
            <div className="login-form">
              <p className="greet">{greet}</p>           
              <label>
                <input 
                  className="login-input"
                  type="text"
                  onChange={update("username")}
                  placeholder="Username"
                  value={username}
                />
              </label>
              <br/>
              <label>
                <input 
                  className="login-input"
                  type="password"
                  onChange={update("password")}
                  placeholder="Password"
                  value={password}
                />
              </label>
              <br/>
              <button 
                className="button login">
                {props.formType}
              </button>
              <br/>
              &nbsp;OR&nbsp;
              <br/>
              <button 
                className="button demo"
                onClick={demoUser}>
                Demo Log in 
              </button>
              <div className="login-errors-ul">
                {renderErrors()}
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

export default SessionForm;