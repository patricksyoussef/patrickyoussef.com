import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"
import Socials from "../Socials"


const Container = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  grid-gap: 50px;
  margin: 1.5rem 0rem;

  // Text
  h2 {
    font-weight: 400;
  }

  p {
    font-size: 1.1rem;
    strong {
      
    }
  }

  // Image
  .image {
    grid-column: span 2;
    display: flex:
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    .image {
      display: none
    }
  }
`)

const HeroText = styled.div(({ theme }) => `
  h1,h2,h3 {
    svg {
      display: none;
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
`)

const Hero = ({ data }) => {
  const { body, frontmatter } = data.nodes[0]
  let image = getImage(frontmatter.featureImage)
  return (
    <Container>
      <HeroText>
        <h2 className="intro">{"Hi, I'm Patrick Youssef "}<span role="img" aria-label="Wave">👋</span></h2>
        <MDXRenderer>{body}</MDXRenderer>
        <Socials />
      </HeroText>
      <ImageGrid className="image">
        <GatsbyImage image={image} alt="Hi it's me!" />
      </ImageGrid>
    </Container>
  )
}
export default Hero
