import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: black;
`

export const Underline = ({ children }) => {
  return <Container>{children}</Container>
}
