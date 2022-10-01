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
  margin-top: 0.5rem;
  margin-bottom: 0rem;
  max-width: ${props => props.theme.widths.max};
  h1,h2 {
    margin: 0.2rem 0;
    font-family: ${props => props.theme.fonts.main};
  }
`

const HomeButton = styled.div`
  h1 {
    margin-bottom: 0.2rem;
  }
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
`
const ColorText = styled.span`
  color: ${props => props.theme.colors.blue};
`

// This is a pretty cool selector
// div > *:not(:last-child) {
//   margin-right: 30px; 
// } 

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
          <ResumeButton href={"/resume.pdf"} target={"_blank"} text="Resume"/>
      </NavItems>
      </NavBar>
    </Underline>
  </Container>
)
export default Header;