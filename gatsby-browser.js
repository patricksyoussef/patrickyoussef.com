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

  .carbon {
    height: 0px;
  }

  html {
    --deckgo-highlight-code-font-family: ${props => props.theme.fonts.code};
    --deckgo-highlight-code-carbon-box-shadow: ${props =>
      props.theme.shadows.s1};
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-carbon-header-padding: 0;
    --deckgo-highlight-code-margin: 16px 0;
  }

  deckgo-highlight-code {
    margin: 0.6rem 0;
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
