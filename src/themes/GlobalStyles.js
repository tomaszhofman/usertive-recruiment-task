import { createGlobalStyle } from 'styled-components';

import mouse from 'assets/icons/Pointer.png';

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');




*,*::after,*::before {
    box-sizing: border-box
}


html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
  cursor: url(${mouse}), auto;
}


p {
  margin: 0
}


`;

export default GlobalStyles;
