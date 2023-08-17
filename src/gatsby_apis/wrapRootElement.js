import TeX from "@matejmazur/react-katex";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import CodeBlock from "../components/codeblock/CodeBlock.js";
import Collapse from "../components/post/Collapse.js";
import GIFWrapper from "../components/post/GIFWrapper.js";
import HeaderLink from "../components/post/HeaderLink.js";
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
      return <TeX block math={props.children} />
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props.className.includes("math-inline")) {
      return <TeX math={props.children} />
    }
    return <span {...props} />;
  },

  // Images
  img: (props) => {
    if (props.src.includes("gif")) {
      return (<GIFWrapper {...props} />)
    }
    return (<img alt={""} {...props} />)
  },

  // Header Linking
  h1: (props) => <HeaderLink props={props} />,

  // MDX Components
  ...{ Collapse, PostVideo },
}

// Define Theme
// Eventually there will be some color switcher here
let color_theme = light_theme
const theme = { ...base, colors: color_theme }

const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  </ThemeProvider>
)
export default wrapRootElement