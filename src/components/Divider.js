import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Underline from "./Utils/Underline"

const Container = styled.div`
`

const TopContent = styled.span`
  * {
    margin: 0.2rem 0;
  }

  font-family: ${props => props.theme.fonts.main};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Divider = ({ data, title, path, linktext }) => (
  <Container>
    <Underline>
      <TopContent>
        <h1>{title}</h1>
      </TopContent>
    </Underline>
  </Container>
)
export default Divider;