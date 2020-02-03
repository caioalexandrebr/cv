


import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar/Sidebar';
import Experience from '../../components/Experience/Experience';
import { ThemeProvider, Container, Row, Col, Text } from '@gympass/yoga';

import Gympass from '../../gympass.png';
import Accenture from '../../accenture.jpeg';
import Workana from '../../workana.jpeg';
import Cartello from '../../cartello.jpeg';

const Page = styled.div`
  background: #fff;
  padding: 60px;
  min-height: 100vh;
  position: relative;
  padding-right: 300px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  margin-top: 0;
  display: block;
  font-size: 20px;
  padding-left: 40px;
  position: relative;
  margin-bottom: 20px;
  text-transform: uppercase;

  .fa {
    left: 0;
    top: -1px;
    width: 30px;
    height: 23px;
    color: white;
    font-size: 16px;
    padding-top: 7px;
    margin-right: 8px;
    text-align: center;
    position: absolute;
    background: #F46152;
    border-radius: 500px;
  }
`;

const SectionProfile = styled.div`
  margin-bottom: 20px;
`;

const Curriculum = () => (
  <ThemeProvider>
    <Container fluid>
      <Row>
        <Col md-start={4} md={6}>
          <Page>
            <Sidebar/>
            <SectionProfile>
              <SectionTitle>
                <i className="fa fa-user"></i>
                CAREER PROFILE
              </SectionTitle>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.
              </Text>
            </SectionProfile>
            <SectionTitle>
              <i className="fa fa-briefcase"></i>
              EXPERIENCES
            </SectionTitle>
            <Experience
              image={Gympass}
              title={'Front-end Developer'} 
              period={'Gympass ⋅ Tempo integral'} 
              time={'dez de 2019 – o momento'} 
              region={'São Paulo, Brazil'} 
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.'}
            />
            <Experience
              image={Accenture}
              title={'Front-end Developer'} 
              period={'Accenture ⋅ Tempo integral'} 
              time={'mar de 2018 – dez de 2019 ⋅ 1 ano 10 meses'} 
              region={'Recife, Brazil'} 
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.'}
            />
            <Experience
              image={Workana}
              title={'Front-end Developer'} 
              period={'Workana ⋅ Freelance'} 
              time={'mar de 2018 – dez de 2019 ⋅ 1 ano 10 meses'} 
              region={'Home Office'} 
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.'}
            />
            <Experience
              image={Cartello}
              title={'Front-end Developer'} 
              period={'Cartello ⋅ Estágio'} 
              time={'out de 2017 – mar de 2018 ⋅ 6 meses'} 
              region={'Recife, Brazil'} 
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.'}
            />
          </Page>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);

export default Curriculum;