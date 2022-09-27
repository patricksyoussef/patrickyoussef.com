import React from "react"
import styled from "styled-components"
import Socials from "./Socials"
import { MDXRenderer } from "gatsby-plugin-mdx"


const Container = styled.div`
  display: flex;
  margin: 2rem ${props => props.theme.spacings.wall};
`
const Header = styled.div`
  font-family: ${props => props.theme.fonts.main};
  font-size: 1.5rem;
  margin-bottom: 0.4rem;
  span {
    margin-left: 0.25rem
  }
`
const Sub = styled.div`
  font-family: ${props => props.theme.fonts.main};
  h1 {
    font-size: 1.75rem;
    margin-top: 0;
  }
  
  p {
    color: ${props => props.theme.colors.text_gray};
    margin: 0;
  }

  strong {
    color: ${props => props.theme.colors.text_dark};
  }
`

export default function Hero({ data }) {
  const { body } = data.nodes[0]
  return (
    <Container>
      <div>
      <Header>
        Hi, I'm Patrick Youssef
        <span role="img" aria-label="Wave"> 👋</span>
      </Header>
      <Sub>
        <MDXRenderer>{body}</MDXRenderer>
      </Sub>
      <Socials/>
      </div>
    </Container>
  )
}
