// Primary site landing, hosts a blurb about who I am and buttons to navigate 
// to contact or about me.

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin: 4rem ${props => props.theme.spacings.wall};
`
const Content = styled.div``
const Header = styled.div`
  font-family: ${props => props.theme.fonts.code};
  font-size: 2.5rem;
  font-weight: 600;
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
  padding: 0.6rem 0.7rem;
  margin-top: 2rem;
  box-shadow: ${props => props.theme.shadows.s1};

  transition: ${props => props.theme.anims.button};

  div {
    transition: ${props => props.theme.anims.button};
  }

  &:hover {
    background-color: ${props => props.theme.colors.blue_button};
  }
  &:hover div {
    color: white;
  }
`
const Contact = styled.div`
  font-family: ${props => props.theme.fonts.code};
  font-size: 1.5rem;
`
const Buttons = styled.div`
  display: flex;
  max-width: 310px;
`

export const Hero = () => (
  <Container>
    <Content>
      <Header>Hello!
        <span role="img" aria-label="Wave"> 👋</span>
      </Header>
      <Sub>
        I'm Patrick Youssef, an avid roboticist and a master's candidate at the
        University of California, San Diego.
      </Sub>
      <Buttons>
        <div>
          <a href="mailto:patricksyoussef@gmail.com?subject=Website Reach Out:">
            <ContactButton>
              <Contact>Get In Touch</Contact>
            </ContactButton>
          </a>
        </div>
      </Buttons>
    </Content>
  </Container>
)
