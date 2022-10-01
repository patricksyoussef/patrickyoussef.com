import React from "react"
import styled from "styled-components"
import Underline from "./Utils/Underline"
import {Link} from "gatsby"

const Container = styled.div`
`

const TopContent = styled.span`
  h1 {
    margin: 0.2rem 0;
  }

  font-family: ${props => props.theme.fonts.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Divider = ({ title, link}) => (
  <Container>
    <Underline>
      <TopContent>
        <Link to={link}>
          <h1>{title}</h1>
        </Link>
      </TopContent>
    </Underline>
  </Container>
)
export default Divider;