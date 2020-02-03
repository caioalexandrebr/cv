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
  padding: 15px;
  
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
`;

const Sidebar = () => (
  <SidebarWrapper>
    <ContainerSidebar className="background-dark">
      <Profile/>
      <Name>Caio Alexandre</Name>
      <Role>Front-end Developer</Role>
    </ContainerSidebar>
    <ContainerSidebar>
      <Group>
        <li>
          <TextContact>
            <i class="fa fa-envelope"></i> caioalexandre.br@gmail.com
          </TextContact>
        </li>
        <li>
          <TextContact>
            <i class="fa fa-phone"></i> +55 (11) 98200-4537
          </TextContact>
        </li>
        <li>
          <TextContact>
            <i className="fa fa-linkedin"></i> /caioalexandrebr
          </TextContact>
        </li>
        <li>
          <TextContact>
            <i class="fa fa-github"></i> /caioalexandrebr
          </TextContact>
        </li>
      </Group>
    </ContainerSidebar>
  </SidebarWrapper>
);

export default Sidebar;