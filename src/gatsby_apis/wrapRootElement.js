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

  body {
    background-color: ${theme.colors.background};
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