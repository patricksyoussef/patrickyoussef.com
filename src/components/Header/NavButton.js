// Fancy little button that links to my resume, hosted in Hero.js

import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const Button = styled.div`
  display: inline-block;
  border-style: solid;
  border-width: 2px;
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

const NavButton = ({ to, text }) => (
  <Link to={to}>
    <Button>
      <Text>{text}</Text>
    </Button>
  </Link>
)
export default NavButton;
