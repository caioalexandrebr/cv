import React from 'react';
import Curriculum from './pages/Curriculum';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/cv">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>

    <Switch>
      <Route exact path="/" component={Curriculum}/>
      <Route path="/cv" component={Curriculum}/>
      <Route path="/about" component={About}/>
      <Route path="/users" component={Users}/>
    </Switch>
  </Router>
);

export default App;