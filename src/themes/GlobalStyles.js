import { createGlobalStyle } from 'styled-components';

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
}


p {
  margin: 0
}


`;

export default GlobalStyles;
