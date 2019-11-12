import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return (
      <div>
        <p>Welcome {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    )
  }
};

export default Greeting;