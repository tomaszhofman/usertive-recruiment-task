import { createGlobalStyle } from 'styled-components';

import mouse from 'assets/icons/Pointer.png';

const GlobalStyles = createGlobalStyle`






*,*::after,*::before {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}


html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
  cursor: url(${mouse}), auto;
}


p {
  margin: 0;
  font-family: 'Inter', sans-serif;
}


`;

export default GlobalStyles;
