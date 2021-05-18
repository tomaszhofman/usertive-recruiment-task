import Footer from 'components/organisms/Footer';
import Nav from 'components/organisms/Nav';
import React from 'react';
import styled from 'styled-components';
import Background from './Background';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const MainTemplate = ({ children }) => {
  return (
    <Background>
      <Wrapper>
        <Nav />
        <CenterContainer>{children}</CenterContainer>
        <Footer />
      </Wrapper>
    </Background>
  );
};

export default MainTemplate;
