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

const Curriculo = () => (
  <Page>
    <Sidebar/>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur non sem in maximus. Donec lacinia non metus nec dignissim. Integer lacinia porta massa, nec malesuada augue. Proin gravida nunc quis massa posuere, et aliquam mi egestas. Donec elementum non mauris non eleifend. Vivamus iaculis est lorem, ut interdum nisl pharetra in. Quisque in sapien dictum, fringilla est vitae, vehicula mauris. Sed molestie lacus vitae auctor semper.
    </Text>
  </Page>
);

export default Curriculo;