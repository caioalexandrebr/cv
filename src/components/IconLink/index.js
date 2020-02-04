import React from 'react';
import { Text } from '@gympass/yoga';
import styled from 'styled-components';

const TextContact = styled(Text)`
  color: white;
  font-size: 14px;

  a {
    color: white;
    margin-left: 10px;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;

const IconLink = (props) => (
  <TextContact>
    <i className={`fa fa-${ props.icon }`}></i>
    <a href={props.url} target="_blank" rel="noopener noreferrer">{props.text}</a>
  </TextContact>
);

export default IconLink;