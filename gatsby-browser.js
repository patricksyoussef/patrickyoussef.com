import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ol,ul {
    padding-left: 20px;
  }

  body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background-color: ${props => props.theme.colors.light1};
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
