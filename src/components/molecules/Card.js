import React, { useState } from 'react';
import styled from 'styled-components';

const HoverSpan = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  line-height: 20px;
  font-size: 14px;
  z-index: 10;
  opacity: ${({ isHover }) => (isHover ? '1' : '0')};
`;

const Span = styled.span`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  line-height: 20px;
  font-size: 14px;
  z-index: 9;
  opacity: ${({ isHover }) => (isHover ? '0' : '1')};
`;

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
  transition: all 3s;
  backdrop-filter: blur(4px) opacity(0);

  &:hover {
    background: linear-gradient(
        0deg,
        rgba(43, 34, 74, 0.92) 7.69%,
        rgba(70, 58, 113, 0.92) 100%
      ),
      url(${({ image }) => image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: all 0.4s ease-in-out;
    &::before {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      backdrop-filter: blur(4px) opacity(1);
    }

    ${HoverSpan} {
      div {
        z-index: 9999;
        p {
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          text-align: center;
        }
      }
    }
  }
`;

const Card = ({ item }) => {
  const [isHover, setIsHover] = useState();

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      image={item.image}
    >
      <Span isHover={isHover}>{item.name}</Span>
      <HoverSpan isHover={isHover}>
        <div>
          <p>Details</p>
        </div>
      </HoverSpan>
    </Wrapper>
  );
};

export default Card;
