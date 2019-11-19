import React from 'react';
import '../styles/stylesheets';
import { 
  AuthRoute,
  //  ProtectedRoute
} from '../util/route_util';
import { Switch } from 'react-router-dom';
import Splash from './splash/splash';
import Nav from './nav/nav_container';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;