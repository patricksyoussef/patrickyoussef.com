// Main header for sit and the fundamental part of layout, this is a permanent
// fixture on the top of the site alongside the rest of layout. At this point
// just my name and a resume button.

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import HeaderButton from "./HeaderButton"
import ResumeButton from "./ResumeButton"
import Underline from "../Utils/Underline"

const Container = styled.div`
  margin-bottom: 0rem;
  max-width: ${props => props.theme.widths.max};

  h1,h2 {
    margin: 0.2rem 0;
    font-family: ${props => props.theme.fonts.main};
  }
`
const ColorText = styled.span`
  color: ${props => props.theme.colors.blue};
`
const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NavItems = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: ${props => props.theme.fonts.sub};
  font-size: 0.9rem;
  font-weight: 700;
`

const Header = () => (
  <Container>
    <Underline>
      <NavBar>
        <Link to="/">
          <h1>
            Patrick<ColorText>.</ColorText>
          </h1>
        </Link>
        <NavItems>
          <HeaderButton
            to={"/about"}
            text="About"/>
          <ResumeButton
            href={"/resume.pdf"}
            target={"_blank"}
            text="Resume"/>
        </NavItems>
      </NavBar>
    </Underline>
  </Container>
)
export default Header;