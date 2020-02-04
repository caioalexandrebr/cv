import React from 'react';
import styled from 'styled-components';
import IconLink from '../IconLink';
import Perfil from '../../perfil.png';

const SidebarWrapper = styled.div`
  color: white;
  height: 100%;
  background: #F46152;
  box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`;

const ContainerSidebar = styled.div`
  padding: 15px;
  
  &.profile {
    padding: 40px 0;
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
  
const Name = styled.h1`
  margin: 10px 0;
  display: block;
  font-size: 32px;
  font-weight: 900;
  text-align: center;
`;

const Role = styled.h2`
  margin: 0;
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

const Sidebar = () => (

  <SidebarWrapper>
    <ContainerSidebar className="profile">
      <Profile>
        <img src={Perfil} alt="Logo" />
      </Profile>
      <Name>Caio Alexandre</Name>
      <Role>Front-end Developer</Role>
    </ContainerSidebar>
    <ContainerSidebar>
      <Group>
        <li>
          <IconLink icon={'envelope'} text={'caioalexandre.br@gmail.com'} url={'mailto: caioalexandre.br@gmail.com'}/>
        </li>
        <li>
          <IconLink icon={'phone'} text={'+55 (11) 9 8200-4537'} url={'tel:+5511982004537'}/>
        </li>
        <li>
          <IconLink icon={'linkedin'} text={'/in/caioalexandrebr'} url={'https://www.linkedin.com/in/caioalexandrebr/'}/>
        </li>
        <li>
          <IconLink icon={'github'} text={'/caioalexandrebr'} url={'https://github.com/caioalexandrebr/'}/>
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
        <span>Portuguese </span><span className="placeholder">(Native)</span>
      </div>
      <div>
        <span>English </span><span className="placeholder">(Basic)</span>
      </div>
    </ContainerSidebar>
  </SidebarWrapper>
);

export default Sidebar;