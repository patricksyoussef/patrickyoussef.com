import React from "react";
import styled from "styled-components";

const Button = styled.div(({ theme }) => `
  display: inline-block;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 10rem;
  border-color: ${theme.colors.buttons.border};
  padding: 0.75rem;
  text-decoration: none;
  color: ${theme.colors.text.dark};
  transition: ${theme.transitions.main};

  &:hover {
    border-color: ${theme.colors.buttons.border_hover};
    background-color: ${theme.background_darken};
  }
`)

const Text = styled.div`
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
`

const PillButton = ({ href, target, text }) => (
  <a href={href} target={target} rel="noreferrer">
    <Button>
      <Text>{text}</Text>
    </Button>
  </a>
)
export default PillButton;