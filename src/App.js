import React from 'react';
import Curriculo from './components/Curriculo/Curriculo'
import { ThemeProvider, Container, Row, Col } from '@gympass/yoga';

const App = () => (
  <ThemeProvider>
    <Container fluid>
      <Row>
        <Col md-start={4} md={6}>
          <Curriculo/>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);

export default App;