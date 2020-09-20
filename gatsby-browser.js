import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"
import "./src/styles/sanitize.css"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  /* Font Overrides to rem*/
  body {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.17rem;
    }
    h4 {
      font-size: 1rem;
    }

    h1, h2, h3, h4, h5, h6 {
      margin-bottom: 0.3em;
    }

    h1, h2, h3, h4, h5, h6, p, li {
      color: ${props => props.theme.colors.text_dark};
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body, html {
    font-family: ${props => props.theme.fonts.main};
    height: 100%;
    background-color: ${props => props.theme.colors.light1};
    font-weight: 400;
  }

  deckgo-highlight-code {
    --deckgo-highlight-code-font-family: ${props => props.theme.fonts.code};
    --deckgo-highlight-code-carbon-box-shadow: ${props =>
      props.theme.shadows.s1};
    --deckgo-highlight-code-carbon-toolbar-display: none;
    --deckgo-highlight-code-carbon-header-padding: 0;
    --deckgo-highlight-code-margin: 16px 0;

    margin: 0.6rem 0;

    .carbon {
      height: 0px;
    }
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
