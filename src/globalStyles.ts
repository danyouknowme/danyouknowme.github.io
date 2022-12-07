import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: rgb(32, 32, 35);
  }

  main {
    max-width: 768px;
    margin: 0 auto;
  }

  canvas {
    height: 350px;
  }
`;

