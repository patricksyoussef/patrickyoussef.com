// Static elements of the site, holds the header and footer and a limited width
// content box.

import React from "react"
import Header from "./Header/Header"
import Footer from "../components/Footer"
import styled from "styled-components"
import {MDXProvider} from '@mdx-js/react'
import CodeBlock from './Code/CodeBlock'
import TeX from "@matejmazur/react-katex";
import PostButton from "./Post/PostButton"
import PostVideo from "./Post/PostVideo"
import Collapse from "../components/Utils/Collapse"
import("katex/dist/katex.min.css");

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
  div: (props) => {
    if (props.className.includes("math-display")) {
      return <TeX block math={props.children} />;
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props.className.includes("math-inline")) {
      return <TeX math={props.children} />;
    }
    return <span {...props} />;
  },
  ...{PostButton, PostVideo, Collapse},
}

const FullView = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.light1} !important;
`

const Container = styled.div`
  max-width: ${props => props.theme.widths.max};
  margin: 0 auto;
  padding: 0rem 1rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  height: 100%;

  // Font overrides to rem, for simpler content scaling
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
  p, li {
    font-size: 1.25rem;
  }

`

const ColorStrip = styled.div`
  height: 0.5rem;
  background-color: ${props => props.theme.colors.blue};
`

function Layout({ children }) {
  return (
    <FullView>
      <ColorStrip />
      <MDXProvider components={components}>
        <Container>
          <Header />
          {children}
          <Footer/>
        </Container>
      </MDXProvider>
    </FullView>
  )
}
export default Layout;