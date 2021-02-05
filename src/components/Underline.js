// Simple underline style environment

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.und};
  margin-bottom: 0.75rem;
`

export const Underline = ({ children }) => {
  return <Container>{children}</Container>
}
