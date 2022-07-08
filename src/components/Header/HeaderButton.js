// Fancy little button that links to my resume, hosted in Hero.js

import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"

const Button = styled.div`
  display: inline-block;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${props => props.theme.colors.blue};
  padding: 0.25rem 0.5rem;
  margin-left: 0.75rem;
  text-decoration: none;
  transition: ${props => props.theme.anims.button};

  div {
    color: ${props => props.theme.colors.text_dark};
    transition: ${props => props.theme.anims.button};
  }

  &:hover {
    background-color: ${props => props.theme.colors.res_button};
  }
  &:hover div {
  }
`
const Text = styled.div`
  h3 {
    margin: 0;
  }

  font-family: ${props => props.theme.fonts.code};
  font-size: 1rem;
  font-weight: 700;
`

const HeaderButton = ({ to, text }) => (
  <Link to={to}>
    <Button>
      <Text>{text}</Text>
    </Button>
  </Link>
)
export default HeaderButton;
