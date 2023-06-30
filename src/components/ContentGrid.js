import React from "react";
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-flow: row dense;
  grid-gap: ${theme.grid.gap}
`)

const ContentGrid = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
export default ContentGrid
