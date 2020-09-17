import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background-color: ${props => props.theme.colors.light1};
    line-height: 1.6;
    font-weight: 400;
  }

  ol,ul {
    padding-left: 20px;
  }

  code {
    font-family: ${props => props.theme.fonts.code};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    box-shadow: ${props => props.theme.shadows.s1};
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
