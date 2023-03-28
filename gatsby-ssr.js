import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"
import "./src/styles/sanitize.css"

const GlobalStyles = createGlobalStyle`
  // Global Style
  html {
    font-size: 15px;
    scroll-behavior: smooth;
    font-family: ${props => props.theme.fonts.main};  
  }

  // Media Queries
  @media (max-width: 800px) {
    html { font-size: 14px; }
  }
  @media (max-width: 600px) {
    html { font-size: 14px; }
  }
  @media (max-width: 450px) {
    html { font-size: 13px; }
  }
  @media (max-width: 370px) {
    html { font-size: 11px; }
  }
`

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)