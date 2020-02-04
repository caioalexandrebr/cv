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

  span {
    display: block;

    &:not(:first-of-type) {
      color: rgba(0,0,0,.6);
    }
  }

  p {
    margin-top: ;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
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
      <span>{props.period}</span>
      <span>{props.time}</span>
      <span>{props.region}</span>
      {props.description.map(p => <p>{p}</p>)}
    </Info>
  </ExperienceWrapper>
);

export default Experience;