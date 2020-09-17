import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  margin: 6rem 0;
`
const Content = styled.div`
  margin: 6rem 0;
`
const Header = styled.div`
  font-family: ${props => props.theme.fonts.code};
  font-size: 2.5rem;
  font-weight: 800;
`
const Sub = styled.div`
  font-family: ${props => props.theme.fonts.main};
  font-size: 2rem;
`
const ContactButton = styled.div`
  display: inline-block;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  margin-top: 2rem;

  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgb(0, 0, 255, 0.7);
  }
`
const Contact = styled.div`
  font-family: ${props => props.theme.fonts.code};
  font-size: 1.5rem;
`

export const Hero = () => (
  <Container>
    <Content>
      <Header>Hello,</Header>
      <Sub>
        I'm Patrick Youssef, an avid roboticist and master's candidate at the
        University of California, San Diego.
      </Sub>
      <a href="mailto:patricksyoussef@gmail.com">
        <ContactButton>
          <Contact>Get In Touch</Contact>
        </ContactButton>
      </a>
    </Content>
  </Container>
)
