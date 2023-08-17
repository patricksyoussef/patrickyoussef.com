import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"
import Socials from "../Socials"


const Container = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  grid-gap: 2rem;
  margin: 2em 0rem;
`)

const Content = styled.div(({ theme }) => `  
`)

const HeroText = styled.div(({ theme }) => `
  p {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 300;
    color: ${theme.colors.text.light};
  }

  p:not(:last-child) {
    margin-bottom: 1em;
  }

  a, strong {
    font-weight: 500;
    color: ${theme.colors.text.dark};
  }

  a {
    text-decoration: underline ${theme.colors.background};
    transition: text-decoration-color ${theme.transitions.main};
    &:hover {
      text-decoration-color: ${theme.colors.primary};
    }
  }
`)

const ImageGrid = styled.div(({ theme }) => `
  display: grid;
  grid-template-rows: 1fr;
  .gatsby-image-wrapper {
    box-shadow: ${theme.shadow};
    border-color: ${theme.colors.borders};
    border-width: 1px;
    border-style: solid;
    border-radius: 50%;
  }

  display: flex:
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    .image {
      display: none
    }
  }
`)

const Hero = ({ data }) => {
  // <h2 className="intro">{"Hi, I'm Patrick Youssef "}<span role="img" aria-label="Wave">👋</span></h2>
  const { body, frontmatter } = data.nodes[0]
  let image = getImage(frontmatter.featureImage)
  return (
    <Container>
      <Content>
        <HeroText>
          <MDXRenderer>{body}</MDXRenderer>
        </HeroText>
        <Socials />
      </Content>
      <ImageGrid>
        <GatsbyImage image={image} alt="Hi it's me!" />
      </ImageGrid>
    </Container>
  )
}
export default Hero
