import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
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

const SectionTitle = (props) => (
  <Title>
    <i className={`fa fa-${ props.icon }`}></i>
    {props.title}
  </Title>
);

export default SectionTitle;