import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

  if (currentUser) {
    return (
      <div>
        <h1>Welcome {currentUser.username}</h1>
        <button onClick={logout}>Log Out</button>
        <div>
          <Link to='/newpost'>Create Post</Link>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        {/* <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link> */}
      </div>
    )
  }
};

export default Greeting;