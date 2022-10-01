// Fancy little button that links to my resume, hosted in Hero.js

import React from "react"
import styled from "styled-components"

const Button = styled.div`
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${props => props.theme.colors.blue};
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  margin-left: 0.25rem;
  transition: ${props => props.theme.anims.main};

  div {
    color: ${props => props.theme.colors.text_dark};
  }

  &:hover {
    background-color: rgba(24, 95, 184, 0.2);
  }
  &:hover div {
  }
`
const Text = styled.div`
  h3 {
    margin: 0;
  }

  font-family: ${props => props.theme.fonts.main};
  font-size: 1.1rem;
  font-weight: 700;
`

const ResumeButton = ({ href, target, text }) => (
  <a href={href} target={target} rel="noreferrer">
    <Button>
      <Text>{text}</Text>
    </Button>
  </a>
)
export default ResumeButton;