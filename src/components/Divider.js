import React from "react"
import styled from "styled-components"
import Underline from "./Utils/Underline"
import {Link} from "gatsby"

const Container = styled.div`
`

const TopContent = styled.span`
  h1,h2,h3 {
    margin: 0.2rem 0;
    font-weight: 400;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SubText = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Divider = ({ title, link, subtext}) => (
  <Container>
    <Underline>
      <TopContent>
        <Link to={link}>
          <h1>{title}</h1>
        </Link>
        <Link to={link}>
          <SubText>
            <h3>{subtext}</h3>
          </SubText>
        </Link>
      </TopContent>
    </Underline>
  </Container>
)
export default Divider;