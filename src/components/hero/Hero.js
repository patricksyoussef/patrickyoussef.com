import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"
import Socials from "../Socials"


const Container = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 50px;
  margin: 1.5rem 0rem;

  // Text
  h1, h2 {
    font-weight: 300;
    color: ${theme.colors.text.light};
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
  
  // Image
  .image {
    display: flex:
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    .image {
      display: none
    }
  }
`)

const HeroText = styled.div(({ theme }) => `
  h1,h2,h3 {
    .anchor {
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
  // <h2 className="intro">{"Hi, I'm Patrick Youssef "}<span role="img" aria-label="Wave">👋</span></h2>
  const { body, frontmatter } = data.nodes[0]
  let image = getImage(frontmatter.featureImage)
  return (
    <Container>
      <HeroText>
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
