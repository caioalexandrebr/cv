import React from 'react';
import { Text } from '@gympass/yoga';
import styled from 'styled-components';
import Perfil from '../../perfil.png';

const SidebarWrapper = styled.div`
  top: 0;
  right: 0;
  color: white;
  width: 260px;
  height: 100%;
  min-height: 800px;
  position: absolute;
  background: #F46152;
`;

const ContainerSidebar = styled.div`
  padding: 15px;
  
  &.background-dark {
    background: rgba(0, 0, 0, 0.2);
  }
  
  .block {
    display: block;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .subtitle {
    font-weight: bold;
  }

  .placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;
  
const Profile = styled.div`
  width: 125px;
  height: 125px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 10px;
  
  img {
    margin: 0;
    width: 100%;
    border-radius: 500px;
  }
`;
  
const Name = styled.span`
  margin-top: 0;
  display: block;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
  margin-bottom: 10px;
`;

const Role = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
`;

const Group = styled.ul`
  margin: 0;
  padding: 0;

  li {
    list-style: none;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TextContact = styled(Text)`
  color: white;
  font-size: 14px;

  a {
    color: white;
    margin-left: 10px;
    text-decoration: none;
    text-shadow: 1px 1px 0px rgba(0,0,0,0.2);
  }
`;

const Sidebar = () => (
  <SidebarWrapper>
    <ContainerSidebar className="background-dark">
      <Profile>
        <img src={Perfil} alt="Logo" />
      </Profile>
      <Name>Caio Alexandre</Name>
      <Role>Front-end Developer</Role>
    </ContainerSidebar>
    <ContainerSidebar>
      <Group>
        <li>
          <TextContact>
            <i class="fa fa-envelope"></i>
            <a href="mailto: caioalexandre.br@gmail.com">caioalexandre.br@gmail.com</a>
          </TextContact>
        </li>
        <li>
          <TextContact>
            <i class="fa fa-phone"></i>
            <a href="tel:+5511982004537">+55 (11) 98200-4537</a>
          </TextContact>
        </li>
        <li>
          <TextContact>
            <i className="fa fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/caioalexandrebr/" target="_blank">/caioalexandrebr</a>
          </TextContact>
        </li>
        <li>
          <TextContact>
            <i class="fa fa-github"></i>
            <a href="https://github.com/caioalexandrebr" target="_blank">/caioalexandrebr</a>
          </TextContact>
        </li>
      </Group>
    </ContainerSidebar>
    <ContainerSidebar>
      <span className="title block">EDUCATION</span>
      <span className="subtitle block">UNINASSAU</span>
      <span>BSc in Information System</span>
      <span className="placeholder block">2017 - 2019</span>
    </ContainerSidebar>
    <ContainerSidebar>
      <span className="title block">LANGUAGES</span>
      <div>
        <span>Portuguese</span><span className="placeholder">(Native)</span>
      </div>
      <div>
        <span>English</span><span className="placeholder">(Basic)</span>
      </div>
    </ContainerSidebar>
  </SidebarWrapper>
);

export default Sidebar;