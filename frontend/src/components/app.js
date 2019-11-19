import React from 'react';
import { 
  AuthRoute,
  //  ProtectedRoute
} from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './nav/nav_container';
import Modal from "./modal/modal";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import CampIndexContainer from './index/camp_index_container';
import CampFormContainer from './show/site_form_container';

const App = () => (
  <div>
    <Modal />
    <Nav />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/campsites" component={CampIndexContainer} />
      <AuthRoute exact path="/campsites/new" component={CampFormContainer} />
    </Switch>
  </div>
);

export default App;