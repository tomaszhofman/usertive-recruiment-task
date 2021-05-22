import { Button } from 'components/atoms/Button';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import planet from 'assets/planet/planet.png';
import landingGear from 'assets/planet/landinggear.png';
import rocket from 'assets/planet/rocket.png';
import smoke1 from 'assets/planet/smoke1.png';
import smoke2 from 'assets/planet/smoke2.png';

import {
  aniamtionRocket,
  animationSmokeRight,
  animationSmokeLeft,
} from 'themes/animations';

const Wrapper = styled.div`
  margin-left: 180px;
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const PlanetWrapper = styled.div`
  padding: 24px;
  width: 450px;

  img {
    position: relative;
    width: 100%;
  }
`;

const RocketWrapper = styled.div`
  position: absolute;

  img {
    &:nth-child(1) {
      position: absolute;
      top: -180px;
      right: -18px;
      width: 68px;
    }

    &:nth-child(2) {
      position: absolute;
      top: -300px;
      right: -35px;
      width: 102px;
      height: 140px;
      z-index: 10;
      animation: ${({ rocketAnimation }) =>
        rocketAnimation ? 'launch 3s 2s 2 alternate  ' : ''};
    }

    &:nth-child(3) {
      position: absolute;
      top: -205px;
      right: -72px;
      animation: ${({ rocketAnimation }) =>
        rocketAnimation ? 'fumes 10s 2s 2 alternate  ' : ''};
      opacity: 0;
    }

    &:nth-child(4) {
      position: absolute;
      top: -220px;
      right: 50px;
      opacity: 0;
    }
  }

  @keyframes fumes {
    50% {
      transform: scale(1);
      transform: translateX(5px);
      opacity: 1;
    }
    51% {
      transform: scale(0.8);
      transform: translateX(10px);
      opacity: 0.25;
    }
    100% {
      transform: scale(1);
      transform: translateX(15px);
      opacity: 0;
    }
  }

  @keyframes launch {
    20% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(-20px);
    }
    51% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(-200px);
    }
  }
`;

const Rocket = () => {
  const [rocketAnimation, setRocketAnimation] = useState();
  const [disabled, setDisabled] = useState(false);
  let rocketRef = useRef(null);
  let smokeRightRef = useRef(null);
  let smokeLeftRef = useRef(null);

  const disabledButton = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 3000);
  };

  const handleRocketAnimation = () => {
    disabledButton();
    // setRocketAnimation(true);
    aniamtionRocket(rocketRef);
    animationSmokeRight(smokeRightRef);
    animationSmokeLeft(smokeLeftRef);

    // setTimeout(() => {
    //   setRocketAnimation(!rocketAnimation);
    // }, 4000);
  };
  return (
    <Wrapper>
      <PlanetWrapper>
        <img src={planet} alt="" />
      </PlanetWrapper>
      <RocketWrapper rocketAnimation={rocketAnimation}>
        <img src={landingGear} alt="" />
        <img ref={(el) => (rocketRef = el)} src={rocket} alt="" />
        <img ref={(el) => (smokeRightRef = el)} src={smoke1} alt="" />
        <img ref={(el) => (smokeLeftRef = el)} src={smoke2} alt="" />
      </RocketWrapper>

      <Button type="button" disabled={disabled} onClick={handleRocketAnimation}>
        Launch Rocket!
      </Button>
    </Wrapper>
  );
};

export default Rocket;
