import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import PostIndexContainer from "./posts/post_index_container";
import CreatePostContainer from "./posts/create_post_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import ProfileContainer from "./profile/profile_container";
import UserShowContainer from "./profile/user_show_container";
import UserUpdateFormContainer from "./profile/user_update_form_container";
import ExploreIndexContainer from './posts/explore_container'
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from "./modal";

const App = () => {
  return (
  <div className="page">
    <Modal/>
    <ProtectedRoute path="/" component={NavBarContainer} />
      <header className="headerBar"></header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/newpost" component={CreatePostContainer} />
      <ProtectedRoute path="/users/my-profile" component={ProfileContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserShowContainer} />  
      <ProtectedRoute exact path="/edit-profile" component={UserUpdateFormContainer} />
      <ProtectedRoute exact path="/explore" component={ExploreIndexContainer} />
      <ProtectedRoute exact path="/" component={PostIndexContainer} />
    </Switch>
  </div>
  );
};
export default App;