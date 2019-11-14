import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import PostIndexContainer from "./posts/post_index_container";
import CreatePostContainer from "./posts/create_post_container";
import { Switch, Redirect, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <h1>Welcome to Pretty Things</h1> 
      <GreetingContainer/>
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/" component={PostIndexContainer} />
      <ProtectedRoute exact path="/newpost" component={CreatePostContainer} />
      <AuthRoute exact path="/" component={SignupFormContainer} />
      
      <Redirect to="/"/>
    </Switch>
  </div>
);
export default App;