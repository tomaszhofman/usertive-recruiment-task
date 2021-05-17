import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 160px;
  height: 208px;
  border-radius: 16px;
  background: linear-gradient(360deg, #2b224a 0%, rgba(43, 34, 74, 0) 100%),
    url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  transition: all 0.5s;

  &:hover {
    backdrop-filter: blur(4px);
    filter: blur(4px);
    background: linear-gradient(
        0deg,
        rgba(43, 34, 74, 0.92) 7.69%,
        rgba(70, 58, 113, 0.92) 100%
      ),
      url(${({ image }) => image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  span {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
    line-height: 20px;
    font-size: 14px;
  }
`;

const Card = ({ item }) => {
  return (
    <Wrapper image={item.image}>
      <span>{item.name}</span>
    </Wrapper>
  );
};

export default Card;
