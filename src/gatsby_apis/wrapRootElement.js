import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { base, light_theme } from "../styles/theme.js";

// Define Theme
// Eventually there will be some color switcher here
let color_theme = light_theme
const theme = { ...base, colors: color_theme }

const GlobalStyles = createGlobalStyle`
  // Global Style
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: ${theme.colors.background};
  }
`

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
export default wrapRootElement