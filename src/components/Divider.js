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

const LinkText = styled.h3`
  color: ${props => props.theme.colors.text_gray};
  transition: ${props => props.theme.anims.link};
  font-family: ${props => props.theme.fonts.sub};

  &:hover {
    color: ${props => props.theme.colors.text_dark};
  }
`


const Divider = ({ data, title, path, linktext }) => (
  <Container>
    <Underline>
      <TopContent>
        <h1>{title}</h1>
        <Link to={path}>
          <LinkText>{linktext}</LinkText>
        </Link>
      </TopContent>
    </Underline>
  </Container>
)
export default Divider;