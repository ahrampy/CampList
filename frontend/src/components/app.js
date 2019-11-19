import React from 'react';
import { 
  AuthRoute,
  //  ProtectedRoute
} from '../util/route_util';
import { Switch } from 'react-router-dom';
import MainPage from './main/main_page';
import Nav from './nav/nav_container';

const App = () => (
  <div>
    <Nav />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;