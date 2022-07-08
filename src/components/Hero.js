import React from "react"
import styled from "styled-components"
import Socials from "./Socials"

const Container = styled.div`
  display: flex;
  margin: 2rem ${props => props.theme.spacings.wall};
`
const Header = styled.div`
  font-family: ${props => props.theme.fonts.code};
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`
const Sub = styled.div`
  font-family: ${props => props.theme.fonts.main};
  font-size: 1.75rem;
`

const Hero = () => (
  <Container>
    <div>
      <Header>Hello!
        <span role="img" aria-label="Wave"> 👋</span>
      </Header>
      <Sub>
        I'm Patrick Youssef, an avid roboticist and a master's candidate at the
        University of California, San Diego.
      </Sub>
      <Socials/>
    </div>
  </Container>
)
export default Hero;