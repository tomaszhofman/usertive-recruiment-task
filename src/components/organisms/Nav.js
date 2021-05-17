import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logo.png';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  position: absolute;
  top: 36px;
`;

const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <img src={logo} alt="logo" />
      </Container>
    </Wrapper>
  );
};

export default Nav;
