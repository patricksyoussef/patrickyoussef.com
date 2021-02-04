import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import { ResumeButton } from "./ResumeButton"
import styled from "styled-components"

const Container = styled.div`
  margin-bottom: 0rem;
  max-width: ${props => props.theme.widths.max};

  h1 {
    margin: 0.2rem 0;
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
          <ResumeButton />
        </NavItems>
      </NavBar>
    </Underline>
  </Container>
)
