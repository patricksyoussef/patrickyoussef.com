import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AccentText from "./common/AccentText"
import PillButton from "./common/PillButton"
import Underline from "./common/Underline"

const Container = styled.div(({ theme }) => `
  h1, h2, h3 {
    margin: 0rem;
  }
  width: 100%;
`)

const NavBar = styled.div(({ theme }) => `
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0rem;
  align-items: center;
  * {
    font-weight: 500;
    text-decoration: None
  }
`)

const NavItems = styled.div(({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  a:not(:last-child) {
    margin-right: 1.5rem;
  }
`)

const NavItem = styled.div(({ theme }) => `
  transition: ${theme.transitions.main};
  color: ${theme.colors.text.light};
  &:hover {
    color: ${theme.colors.text.dark};
  }
`)

const NavLink = ({ path, text }) => {
  return (
    <Link to={path}>
      <NavItem>
        <h3>{text}</h3>
      </NavItem>
    </Link>
  )
}

const Header = () => {
  return (
    <Container>
      <Underline>
        <NavBar>
          <Link to="/">
            <AccentText>
              <h2>Patrick<span>.</span></h2>
            </AccentText>
          </Link>
          <NavItems>
            <NavLink path="/projects/" text="Projects" />
            <NavLink path="/blog/" text="Blog" />
          </NavItems>
          <PillButton href={"/PatrickYoussefResume.pdf"} target={"_blank"} text="Resume" />
        </NavBar>
      </Underline>
    </Container>
  )
}
export default Header