import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"
import "./src/styles/sanitize.css"

const GlobalStyles = createGlobalStyle`
  html {
      font-size: 15px;
    }
  // Media Queries
  @media (max-width: 800px) {
    html { font-size: 14px; }
  }
  @media (max-width: 350) {
    html { font-size: 12px; }
  }
  @media (max-width: 330px) {
    html { font-size: 11px; }
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)