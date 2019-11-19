import React from 'react';
import { 
  AuthRoute,
  //  ProtectedRoute
} from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './nav/nav_container';
import Modal from "./modal/modal";
import CampIndexContainer from './index/camp_index_container';

const App = () => (
  <div>
    <Modal />
    <Nav />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <AuthRoute exact path="/campsites" component={CampIndexContainer} />
    </Switch>
  </div>
);

export default App;