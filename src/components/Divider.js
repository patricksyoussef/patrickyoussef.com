import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Underline from "./common/Underline"

const Container = styled.div(({ theme }) => `
  h1,h2,h3 {
    margin: 0rem;
    font-weight: 400;
    color: ${theme.colors.text.dark};
  }
  margin: 1em 0em;
`)

const NavItems = styled.div(({ theme }) => `
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 0.25rem;
`)

const Divider = ({ title, link, subtext }) => (
  <Container>
    <Underline>
      <NavItems>
        <Link to={link}>
          <h1>{title}</h1>
        </Link>
        <Link to={link}>
          <h3>{subtext}</h3>
        </Link>
      </NavItems>
    </Underline>
  </Container>
)
export default Divider;