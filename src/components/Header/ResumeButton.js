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
  transition: ${props => props.theme.anims.main};

  div {
    color: ${props => props.theme.colors.text_dark};
  }

  &:hover {
    background-color: rgba(24, 95, 184, 0.25);
  }
`
const Text = styled.div`
  margin: 0;
  font-size: 1.2rem;
`

const ResumeButton = ({ href, target, text }) => (
  <a href={href} target={target} rel="noreferrer">
    <Button>
      <Text>{text}</Text>
    </Button>
  </a>
)
export default ResumeButton;