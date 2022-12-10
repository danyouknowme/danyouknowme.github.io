import styled, { DefaultTheme } from 'styled-components'

export const QuoteContainer = styled.div<{ theme: DefaultTheme }>`
    background-color: ${({ theme }) => theme.quoteBackground};
    padding: 14px;
    text-align: center;
    border-radius: 12px;
    margin: 0 44px;
`
