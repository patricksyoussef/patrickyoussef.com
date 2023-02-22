// Fancy little button that links to my resume, hosted in Hero.js

import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const Button = styled.div`
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: transparent;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
  transition: ${props => props.theme.anims.main};
  background-color: transparent;

  div {
    color: ${props => props.theme.colors.text_dark};
    transition: ${props => props.theme.anims.button};
  }

  &:hover {
    background-color: ${props => props.theme.colors.toc};
    border: 1px solid hsl(0, 0%, 70%);
  }
`
const Text = styled.div`
  margin: 0;
  font-size: 1.2rem;
`

const NavButton = ({ to, text }) => (
  <Link to={to}>
    <Button>
      <Text>{text}</Text>
    </Button>
  </Link>
)
export default NavButton;
