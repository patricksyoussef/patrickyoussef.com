import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"

const Container = styled.div`
  margin-bottom: 4rem;
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
`
const NavItem = styled.div`
  color: gray;
  padding-left: 0.7rem;
  transition: ${props => props.theme.anims.link};

  &:hover {
    color: ${props => props.theme.colors.blue};
  }
`

export const Header = () => (
  <Container>
    <Underline>
      <NavBar>
        <Link to="/">
          <h1>
            Patrick<ColorText>.</ColorText>
          </h1>
        </Link>
        <NavItems>
          <NavItem>
            <Link to="/about">
              <h3>About</h3>
            </Link>
          </NavItem>
        </NavItems>
      </NavBar>
    </Underline>
  </Container>
)
