import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import styled from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { CodeBlock } from "./CodeBlock"
const components = {
  pre: props => <div {...props} />,
  code: CodeBlock,
}

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
`

export const Layout = ({ children }) => {
  return (
    <Container>
      <MDXProvider components={components}>
        <Header />
        {children}
        <Footer />
      </MDXProvider>
    </Container>
  )
}
