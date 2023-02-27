import React from "react"
import styled from "styled-components"
import Socials from "./Socials"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  grid-gap: 50px;
  margin: 1.75rem 0rem;

  .TextContent {
    grid-column: span 3;
    span {
      margin-left: 0.75rem;
    }

    .intro {
      font-weight: 400;
    }

    h1, h2 {
      margin-top: 0rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 1.1rem;
      color: ${props => props.theme.colors.text_gray};
      strong {
        font-weight: 500;
        color: ${props => props.theme.colors.text_dark};
      }
    }
  }

  .Image {
    grid-column: span 2;
    display: flex:
    justify-content: center;
    align-items: center;
  }

  /*Media breakpoint to get rid of image*/  
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    .Image {display: none}
}
`

const ImageGrid = styled.div`
display: grid;
grid-template-rows: 0fr 1fr 0fr;
.gatsby-image-wrapper {
  box-shadow: ${props => props.theme.shadows.s1};
  border-color: ${props => props.theme.colors.text_gray};
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
}
`

export default function Hero({ data }) {
  const { frontmatter, body } = data.nodes[0]
  let image = getImage(frontmatter.featureImage)
  return (
    <Container>
      <div className="TextContent">
        <h2 className="intro">Hi, I'm Patrick Youssef<span role="img" aria-label="Wave">👋</span></h2>
        <MDXRenderer>{body}</MDXRenderer>
        <Socials/>
      </div>
      <ImageGrid className="Image">
        <div></div>
        <GatsbyImage image={image} alt="Hi it's me!"/>
        <div></div>
      </ImageGrid>
    </Container>
  )
}