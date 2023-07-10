import React from "react"
import styled from "styled-components"

const Container = styled.div(({ theme }) => `
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.borders};
`)

const Underline = ({ children }) => {
  return <Container>{children}</Container>
}
export default Underline;