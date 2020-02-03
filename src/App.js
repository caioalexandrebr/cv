import React from 'react';
import Curriculo from './components/Curriculo/Curriculo'
import { ThemeProvider, Container, Row, Col } from '@gympass/yoga';
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
      <Route exact path="/cv">
        <ThemeProvider>
          <Container fluid>
            <Row>
              <Col md-start={4} md={6}>
                <Curriculo/>
              </Col>
            </Row>
          </Container>
        </ThemeProvider>
      </Route>
      <Route path="/about" component={About}/>
      <Route path="/users" component={Users}/>
    </Switch>
  </Router>
);

export default App;