import styled, { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.background} !important;
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.15s linear;
    min-height: 100vh !important;
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
  padding: 0 24px;
`
