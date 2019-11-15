import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import PostIndexContainer from "./posts/post_index_container";
import CreatePostContainer from "./posts/create_post_container";
import PostShowContainer from "./posts/post_show_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import { Switch, Redirect, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from "./modal";

const App = () => {
  return (
  <div className="page">
    <Modal/>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <header>
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
};
export default App;