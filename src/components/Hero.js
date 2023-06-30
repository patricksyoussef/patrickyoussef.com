import React from "react"
import styled from "styled-components"

const Container = styled.div((theme) => `

  grid-row: span 2;
  grid-column: span 2;

  display: flex;
  justify-content: center;
  align-items: center;
`)

const Hero = () => {
  return (
    <Container className="griditems">
      <h1>I need a herooooo</h1>
    </Container>
  )
}
export default Hero
