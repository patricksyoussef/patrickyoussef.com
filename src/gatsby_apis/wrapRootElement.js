import TeX from "@matejmazur/react-katex";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import CodeBlock from "../components/codeblock/CodeBlock.js";
import Collapse from "../components/post/Collapse.js";
import PostVideo from "../components/post/PostVideo.js";
import { base, light_theme } from "../styles/theme.js";

// MDX Provider Setup
// Setting up components for MDXProvider
let components = {
  // Code Block
  pre: CodeBlock,
  wrapper: ({ children }) => <>{children}</>,

  // Math Rendering
  div: (props) => {
    if (props.className.includes("math-display")) {
      import("katex/dist/katex.min.css");
      return <TeX block math={props.children} />
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props.className.includes("math-inline")) {
      import("katex/dist/katex.min.css");
      return <TeX math={props.children} />
    }
    return <span {...props} />;
  },

  // MDX Components
  ...{ Collapse, PostVideo },
}

// Define Theme
// Eventually there will be some color switcher here
let color_theme = light_theme
const theme = { ...base, colors: color_theme }

const GlobalStyles = createGlobalStyle`
  // Importing/Setting Font
  @font-face {
    font-family: "DM Sans Variable";
    src: url(/fonts/DMSansVar.ttf);
  }
  
  // Global Style
  html {
    scroll-behavior: smooth;
    font-size: 15px;
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

  // Setting Background
  body {
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.main};
  }

  // Font Styles
  a {
    text-decoration: none;
  }
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
  p, li, td, tr, .katex {
    font-size: 1.2rem;
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