import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 1111px;

  margin: 0 auto;
  width: 100%;
  position: absolute;
`;

const Container = styled.div`
  width: 100%;
  height: 16px;
  position: absolute;
  bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h5 {
    font-size: 12px;
    font-family: 'Inter';
    line-height: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          <h5>Copyright © Usertive & SpaceX API</h5>
        </div>
        <div>
          <h5>Recruiment Task / Summer 2021</h5>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Footer;
