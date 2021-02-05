// Static elements of the site, holds the header and footer and a limited width
// content box.

import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./CodeBlock"

const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

const FullView = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.light1};
`
const Container = styled.div`
  max-width: ${props => props.theme.widths.max};
  margin: 0 auto;
  padding: 1rem 2rem;

  a {
    text-decoration: none;
    color: inherit;
  }

  font-family: ${props => props.theme.fonts.main};
  height: 100%;
  font-weight: 400;
  text-decoration: none;

  img {
    box-shadow: ${props => props.theme.shadows.s1};
  }

  // Font overrides to rem, for simpler content scaling
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

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.3em;
  }
`
const ColorStrip = styled.div`
  height: 0.5rem;
  background-color: ${props => props.theme.colors.blue};
`

export const Layout = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <FullView>
        <ColorStrip />
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </FullView>
    </MDXProvider>
  )
}
