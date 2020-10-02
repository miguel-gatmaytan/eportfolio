import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import History from 'util/history';
import Classic from 'modules/classic';
import LandingPage from 'modules/landing-page';
import Interactive from 'modules/interactive';

import Overlay from './components/Overlay';
import AppContainer from './components/AppContainer';

export const App = () => (
  <AppContainer>
    <Overlay />
    <Router history={History}>
      <Switch>
        <Route path="/interactive/:section" component={Interactive} />
        <Route path="/interactive" component={Interactive} />
        <Route path="/classic/:section" component={Classic} />
        <Route path="/classic" component={Classic} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  </AppContainer>
);

export default App;
