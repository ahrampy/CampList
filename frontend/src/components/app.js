import React from 'react';
import { Route } from 'react-router-dom'
import { 
  AuthRoute,
   ProtectedRoute
} from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './nav/nav_container';
import Modal from "./modal/modal";
import CampIndexContainer from './index/camp_index_container';
import CampFormContainer from './show/site_form_container';
import CampShowContainer from './show/site_show_container';
import UserProfileContainer from './user/user_profile_container';


const App = () => (
    <div>
      <Modal />
      <Nav />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/campsites" component={CampIndexContainer} />
        <Route exact path="/campsites/new" component={CampFormContainer} />
        <Route exact path="/campsites/:siteId" component={CampShowContainer} />
        <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer}/>
      </Switch>
    </div>
);

export default App;