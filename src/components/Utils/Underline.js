// Simple underline style environment

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.und};
`

const Underline = ({ children }) => {
  return <Container>{children}</Container>
}
export default Underline;