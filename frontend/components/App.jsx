import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './forms/login_form_container';
import SignupFormContainer from './forms/signup_form_container';
import { Switch, Redirect, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      {/* <h1>Welcome to Pretty Things</h1> 
      <GreetingContainer/> */}
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Redirect to="/signup"/>
    </Switch>
  </div>
);
export default App;