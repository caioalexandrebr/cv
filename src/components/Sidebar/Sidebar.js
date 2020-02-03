import React from 'react';
import { Text } from '@gympass/yoga';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  top: 0;
  right: 0;
  color: white;
  width: 240px;
  height: 100%;
  min-height: 800px;
  position: absolute;
  background: #F46152;
`;

const ContainerSidebar = styled.div`
  padding: 30px;
  
  &.background-dark {
    background: rgba(0, 0, 0, 0.2);
  }
`;
  
const Profile = styled.div`
  width: 125px;
  height: 125px;
  margin: 0 auto;
  background: white;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 500px;
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

const Sidebar = () => (
  <SidebarWrapper>
    <ContainerSidebar className="background-dark">
      <Profile/>
      <Name>Caio Alexandre</Name>
      <Role>Front-end Developer</Role>
    </ContainerSidebar>
    <ContainerSidebar>

    <Text>
      caioalexandre.br@gmail.com
      +55 (11) 98200-4537
    </Text>
    </ContainerSidebar>
  </SidebarWrapper>
);

export default Sidebar;