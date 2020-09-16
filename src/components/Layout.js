import React from "react"
import { Header } from "./Header"
import styled from "styled-components"

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 30px;
`

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
