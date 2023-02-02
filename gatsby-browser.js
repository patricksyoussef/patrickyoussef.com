import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"
import "./src/styles/sanitize.css"

export const onInitialClientRender = () => {
  const loadTimer = 500
  const animTimer = loadTimer + 150
  setTimeout(function() {
      document.getElementById("___loader").style.opacity = "0"
  }, loadTimer)
  setTimeout(function() {
      document.getElementById("___loader").style.display = "none"
  }, animTimer)
}

const GlobalStyles = createGlobalStyle`
  // Media Queries
  html {
    font-size: 15px;
    scroll-behavior: smooth;
  }
  @media (max-width: 800px) {
    html { font-size: 14px; }
  }
  @media (max-width: 600px) {
    html { font-size: 13px; }
  }
  @media (max-width: 430px) {
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