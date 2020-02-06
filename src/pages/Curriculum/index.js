


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
  margin: 20px 0;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TextCareer = styled(Text)`
  font-size: 14px;

  :not(:last-of-type) {
    margin-bottom: 15px;
  }
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
                    <TextCareer>Hi, my name is Caio Alexandre, an enthusiastic from web interfaces development area. My successfull journey is directly connected to my main skills as learning, rating, developing innovative solutions and apply applications with the goal of comply with end user expectations with a great quality code and efficiency. I like to work in a collaborative way, helping not only to achieve goals, but also improving the technical and professional knowledge of a team sharing my experience with them.</TextCareer>
                    <TextCareer>While many people are proud of achieving their goals, my biggest wish is going beyond corporative expectations, creating a successfull scenario to every one around me.</TextCareer>
                  </SectionProfile>
                  <SectionTitle icon={'briefcase'} title={'EXPERIENCES'}/>
                  <Experience
                    image={Gympass}
                    title={'Front-end Developer'} 
                    period={'Gympass ⋅ Full-time'} 
                    time={'dec de 2019 – the moment'} 
                    region={'São Paulo, Brazil'}
                  />
                  <Experience
                    image={Accenture}
                    title={'Front-end Developer'} 
                    period={'Accenture ⋅ Full-time'} 
                    time={'mar de 2018 – dec de 2019 ⋅ 1 year 10 months'} 
                    region={'Recife, Brazil'} 
                    description={['Acting in a CMS reference team and improving my knowledge developing innovative solutions using, mainly, Content Management Technologies (CMS) as Liferay and Drupal.','I worked depeloping Frontend and Backend applications using some languages and frameworks as JavaScript, jQuery, PHP and FreeMarker.','In projects management processes i oftenly used agile methods, participating from Scrum rituals as daily meetings, retrospective, sprints planning and analysing scope changes impacts.']}
                  />
                  <Experience
                    image={Workana}
                    title={'Front-end Developer'} 
                    period={'Workana ⋅ Freelance'} 
                    time={'mar de 2018 – dec de 2019 ⋅ 1 year 10 months'} 
                    region={'Home Office'} 
                    description={['I used the tool as a freelancer, with the goal of improve my knowledges in technology area, applying, successfully, innovative solutions, hence producing positive results to many customers. Used agile methods (KanBan) to manage software development through online platforms (Microsoft Azure / Trello) to scope planning, tasks control and obstacles to projects conclusion.']}
                  />
                  <Experience
                    image={Cartello}
                    title={'Front-end Developer'} 
                    period={'Cartello ⋅ Estágio'} 
                    time={'oct de 2017 – mar de 2018 ⋅ 6 months'} 
                    region={'Recife, Brazil'} 
                    description={['Contributing with my knowledge, developing responsive interfaces, using Mobile First concept for WordPress platform, creating a knowledge domain with the often use of some languages as PHP and JavaScript. We used Scrum methods and KanBan as Project management and i participated of important implementantion decisions and analysing risks inside meetings.']}
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