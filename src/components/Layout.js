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
`
const Container = styled.div`
  max-width: ${props => props.theme.widths.max};
  margin: 0 auto;
  padding: 1rem 2rem;
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
