import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"


const Container = styled.div((theme) => `
  grid-row: span 2;
  grid-column: span 2;
`)

const HeroText = styled.div(({ theme }) => `

`)

const Hero = ({ data }) => {
  const { body } = data.nodes[0]
  return (
    <Container>
      <HeroText>
        <h2 className="intro">Hi, I'm Patrick Youssef<span role="img" aria-label="Wave">👋</span></h2>
        <MDXRenderer>{body}</MDXRenderer>
      </HeroText>
    </Container>
  )
}
export default Hero
