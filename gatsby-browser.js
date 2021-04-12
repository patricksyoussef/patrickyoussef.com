import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import theme from "./src/styles/theme"
import "./src/styles/sanitize.css"
require(`katex/dist/katex.min.css`)

const GlobalStyles = createGlobalStyle`
  html {
      font-size: 14.5px;
    }

  // Media Queries
  @media (max-width: 800px) {
    html { font-size: 13px; }
  }
  @media (max-width: 400px) {
    html { font-size: 12px; }
  }
`

export const onInitialClientRender = () => {

  const loadTimer = 450
  const animTimer = loadTimer + 150
  setTimeout(function() {
      document.getElementById("___loader").style.opacity = "0"
  }, loadTimer)

  setTimeout(function() {
      document.getElementById("___loader").style.display = "none"
  }, animTimer)
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
