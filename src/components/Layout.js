import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import styled from "styled-components"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
deckDeckGoHighlightElement()

const FullView = styled.div`
  width: 100%;
  min-height: 100vh;
`
const Container = styled.div`
  max-width: ${props => props.theme.widths.max};
  margin: 0 auto;
  padding: 1rem 1rem;
`
const ColorStrip = styled.div`
  height: 0.5rem;
  background-color: ${props => props.theme.colors.blue};
`

export const Layout = ({ children }) => {
  return (
    <FullView>
      <ColorStrip />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    </FullView>
  )
}
