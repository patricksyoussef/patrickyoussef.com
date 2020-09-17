import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"

const ColorText = styled.span`
  color: blue;
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
  padding-left: 0.7rem;
`

export const Header = () => (
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
)
