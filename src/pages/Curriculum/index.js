


import React from 'react';
import styled from 'styled-components';
import Sidebar from '../../components/Sidebar';
import Experience from '../../components/Experience';
import SectionTitle from '../../components/SectionTitle';
import { ThemeProvider, Container, Row, Col, Text } from '@gympass/yoga';

import Gympass from '../../gympass.png';
import Accenture from '../../accenture.jpeg';
import Workana from '../../workana.jpeg';
import Cartello from '../../cartello.jpeg';

const Page = styled(Container)`
  background: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  padding: 60px 30px;
`;

const SectionProfile = styled.div`
  margin-bottom: 20px;
`;

const Curriculum = () => (
  <ThemeProvider>
    <Container>
      <Row>
        <Col md-start={2} md={10} xxs={12}>
          <Page fluid>
            <Row>
              <Col xl={3} lg={5} md={6} xxs={12}>
                <Sidebar/>
              </Col>
              <Col xl={9} lg={7} md={6} xxs={12}>
                <ContentWrapper>
                  <SectionProfile>
                    <SectionTitle icon={'user'} title={'CAREER PROFILE'}/>
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.
                    </Text>
                  </SectionProfile>
                  <SectionTitle icon={'briefcase'} title={'EXPERIENCES'}/>
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
                </ContentWrapper>
              </Col>
            </Row>
          </Page>
        </Col>
      </Row>
    </Container>
  </ThemeProvider>
);

export default Curriculum;