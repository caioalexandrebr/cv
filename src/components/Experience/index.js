import React from 'react';
import styled from 'styled-components';

const ExperienceWrapper = styled.div`
  margin-bottom: 30px;
`;

const Logo = styled.div`
  width: 54px;
  height: 54px;
  position: absolute;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Info = styled.div`
  padding-left: 80px;

  p {
    margin: 0;

    &:last-child {
      margin-top: 15px;
    }
  }
`;

const Title = styled.h3`
  margin: 0;
  font-weight: bold;
`;

const Experience = (props) => (
  <ExperienceWrapper>
    <Logo>
      <img src={props.image} alt="Gympass"></img>
    </Logo>
    <Info>
      <Title>{props.title}</Title>
      <p>{props.period}</p>
      <p>{props.time}</p>
      <p>{props.region}</p>
      <p>{props.description}</p>
    </Info>
  </ExperienceWrapper>
);

export default Experience;