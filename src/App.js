import React from 'react';
import Curriculum from './pages/Curriculum';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Curriculum}/>
      <Route path="/cv" component={Curriculum}/>
    </Switch>
  </Router>
);

export default App;