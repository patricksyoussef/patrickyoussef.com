import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import CodeBlock from "../components/codeblock/CodeBlock.js";
import { base, light_theme } from "../styles/theme.js";

// MDX Provider Setup
// Setting up components for MDXProvider
let components = {
  pre: CodeBlock,
  wrapper: ({ children }) => <>{children}</>,
}

// Define Theme
// Eventually there will be some color switcher here
let color_theme = light_theme
const theme = { ...base, colors: color_theme }

const GlobalStyles = createGlobalStyle`
  // Global Style
  html {
    scroll-behavior: smooth;
  }

  // Setting Background
  body {
    background-color: ${theme.colors.background};
  }

  // Importing/Setting Font
  @font-face {
    font-family: "IBM Plex Sans Roman";
    src: url(/fonts/IBMPlexSansVar-Roman.ttf);
  }

  // Font Styles
  h1, h2, h3, h4 {
    font-weight: 500;
  }
  h1 {
    font-size: 1.75rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1rem;
  }
  p, li, td, tr {
    font-size: 1.25rem;
  }
`

const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {element}
    </ThemeProvider>
  </MDXProvider>
)
export default wrapRootElement