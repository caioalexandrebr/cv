import React from 'react';
import { Text } from '@gympass/yoga';
import Sidebar from '../Sidebar/Sidebar';
import styled from 'styled-components';

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
    color: white;
    font-size: 16px;
    padding: 7px 9px;
    margin-right: 8px;
    position: absolute;
    background: #F46152;
    border-radius: 500px;
  }
`;

const Curriculo = () => (
  <Page>
    <Sidebar/>
    <SectionTitle>
      <i class="fa fa-user"></i>
      CAREER PROFILE
    </SectionTitle>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.
    </Text>
  </Page>
);

export default Curriculo;