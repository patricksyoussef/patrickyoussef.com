import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import PillButton from "./common/PillButton"

const Container = styled.div(({ theme }) => `
  h1, h2, h3 {
    margin: 0rem;
  }
  width: 100%;
  margin: 0.75rem 0rem;
`)

const NavBar = styled.div(({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    font-weight: 500;
    text-decoration: None
  }
`)

const HomeButton = styled.div(({ theme }) => `
  margin: 0rem 0rem;
  color: ${theme.colors.text.dark};
`)

const ColorText = styled.span(({ theme }) => `
  color: ${theme.colors.primary};
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
  color: ${theme.colors.text.normal};
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
      <NavBar>
        <Link to="/">
          <HomeButton>
            <h2>
              Patrick<ColorText>.</ColorText>
            </h2>
          </HomeButton>
        </Link>
        <NavItems>
          <NavLink path="/projects/" text="Projects" />
          <NavLink path="/blog/" text="Blog" />
        </NavItems>
        <PillButton href={"/PatrickYoussefResume.pdf"} target={"_blank"} text="Resume" />
      </NavBar>
    </Container>
  )
}
export default Header