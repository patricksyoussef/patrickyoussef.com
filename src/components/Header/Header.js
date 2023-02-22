// Main header for sit and the fundamental part of layout, this is a permanent
// fixture on the top of the site alongside the rest of layout. At this point
// just my name and a resume button.

import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import NavButton from "./NavButton"
import ResumeButton from "./ResumeButton"
import Underline from "../Utils/Underline"

const Container = styled.div`
  max-width: ${props => props.theme.widths.max};
  h1, h2 {
    margin: 0rem;
  }
`

const HomeButton = styled.div`
  margin: 0.75rem 0rem;
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
  div {
    font-weight: 500;
  }

  a:not(:last-child) {
    margin-right: 0.25rem;
  }
`
const ColorText = styled.span`
  color: ${props => props.theme.colors.blue};
`

const Header = () => (
  <Container>
    <Underline>
      <NavBar>
        <Link to="/">
          <HomeButton>
            <h1>
              Patrick<ColorText>.</ColorText>
            </h1>
          </HomeButton>
        </Link>
        <NavItems>
          <NavButton to={'/projects/'} text="Projects"/>
          <NavButton to={'/blog/'} text="Blog"/>
          <ResumeButton href={"/PatrickYoussefResume.pdf"} target={"_blank"} text="Resume"/>
      </NavItems>
      </NavBar>
    </Underline>
  </Container>
)
export default Header;