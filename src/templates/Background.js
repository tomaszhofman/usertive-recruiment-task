import React from 'react';
import styled from 'styled-components';

import { Dot } from 'components/atoms/Dot';
import { ReactComponent as Circle } from 'assets/Circle.svg';

const BackgroundWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkPurple};
  width: 100%;
  height: 100vh;
  position: relative;

  ${Dot} {
    &:nth-child(1) {
      position: absolute;
      left: 5.62%;
      right: 93.82%;
      top: 18.75%;
      bottom: 80.21%;
    }

    &:nth-child(2) {
      position: absolute;
      left: 45.83%;
      right: 53.61%;
      top: 84.9%;
      bottom: 14.06%;
    }

    &:nth-child(3) {
      position: absolute;
      left: 60.76%;
      right: 38.68%;
      top: 10.94%;
      bottom: 88.02%;
    }
    &:nth-child(4) {
      position: absolute;
      left: 87.43%;
      right: 12.01%;
      top: 71.88%;
      bottom: 27.08%;
    }
  }
`;

const CircleContainer = styled.div`
  div {
    position: fixed;
    &:nth-child(1) {
      bottom: 12.97%;
    }
    &:nth-child(2) {
      top: -100px;
      right: 46.33%;
      transform: rotate(90deg);
    }
    &:nth-child(3) {
      transform: rotate(180deg);
      right: 0;
      top: 14.06%;
    }
  }
`;

const Background = ({ children }) => {
  return (
    <BackgroundWrapper>
      <Dot color="pink" />
      <Dot color="lightPurple" />
      <Dot color="mint" />
      <Dot color="pink" />
      <CircleContainer>
        <div>
          <Circle />
        </div>
        <div>
          <Circle />
        </div>
        <div>
          <Circle />
        </div>
      </CircleContainer>
      {children}
    </BackgroundWrapper>
  );
};

export default Background;
