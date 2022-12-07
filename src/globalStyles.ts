import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body {
    background-color: rgb(32, 32, 35);
  }

`;

export const MainSection = styled.main`
  display: block;
  margin: 0 auto;
  max-width: 768px;
  height: 200vh;
`