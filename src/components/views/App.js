import React from 'react';

import { ThemeProvider } from 'styled-components';
import MainTemplate from '../templates/MainTemplate';
import GlobalStyles from '../../themes/GlobalStyles';
import { theme } from '../../themes/theme';
import styled from 'styled-components';
import DashBoard from './DashBoard';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 110px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainTemplate>
        <Wrapper>
          <DashBoard />
        </Wrapper>
      </MainTemplate>
    </ThemeProvider>
  );
};

export default App;
