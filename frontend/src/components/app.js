import React from 'react';
import '../styles/stylesheets';
import { 
  AuthRoute,
  //  ProtectedRoute
} from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './nav/nav_container';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import CampIndexContainer from './index/camp_index_container';
import UserProfile from './user/user_profile';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />    
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/campsites" component={CampIndexContainer}/>
      <AuthRoute exact path="/users" component={UserProfile}/>
    </Switch>
  </div>
);

export default App;