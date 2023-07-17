import React from "react";
import { Coffee, GitHub, Linkedin, Send } from 'react-feather';
import styled from "styled-components";

const Container = styled.span(({ theme }) => `
  margin-top: 1.5em;  
  margin-bottom: 0rem;
  display: flex;

  div:not(:last-child) {
    margin-right: 1rem;
  }
`)

const SocialItem = styled.div(({ theme }) => `
  svg {
    transition: ${theme.transitions.main};
    color: ${theme.colors.text.dark};
    &:hover {
      color: ${theme.colors.primary};
    }
  }
`)


const Socials = () => {
  let iconSize = 30
  let strokeWidth = 1.5
  return (
    <Container>
      <SocialItem>
        <a href="https://www.linkedin.com/in/patricksyoussef/" target="_blank" rel="noreferrer">
          <Linkedin size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://github.com/patricksyoussef" target="_blank" rel="noreferrer">
          <GitHub size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="mailto:patricksyoussef@gmail.com">
          <Send size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
      <SocialItem>
        <a href="https://account.venmo.com/u/PatrickYoussef" target="_blank" rel="noreferrer">
          <Coffee size={iconSize} strokeWidth={strokeWidth} />
        </a>
      </SocialItem>
    </Container>
  )
}
export default Socials;