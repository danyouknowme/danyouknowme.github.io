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

  body::-webkit-scrollbar {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const MainSection = styled.main`
  display: block;
  margin: 0 auto;
  max-width: 768px;
`

export const Article = styled.article`
  position: relative;
  opacity: 1;
  transform: none;
`

export const ContentSection = styled.div`
  width: 100%;
  max-width: 60ch;
  margin: 0 auto;
`