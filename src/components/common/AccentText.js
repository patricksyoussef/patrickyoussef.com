import React from "react"
import styled from "styled-components"

const Container = styled.span(({ theme }) => `
  margin: 0rem 0rem;
  h1,h2,h3 {
    margin: 0rem;
  }
  color: ${theme.colors.text.dark};
  display: flex;
  flex-direction: row;

  span {
    color: ${theme.colors.primary};
  }
`)

const AccentText = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
export default AccentText;