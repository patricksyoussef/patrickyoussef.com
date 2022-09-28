import React from "react"
import styled from "styled-components"
import Socials from "./Socials"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, auto));
  grid-gap: 50px;
  margin: 2rem 0;
  
  .TextContent {
    grid-column: span 3;
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.text_dark};
    span {
      margin-left: 0.75rem;
    }

    .intro {
      font-weight: normal;
    }

    h1,h2 {
      margin-top: 0rem;
    }

    p {
      color: ${props => props.theme.colors.text_gray};
      strong {
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
  border-color: ${props => props.theme.colors.text_gray};
  border-width: 1px;
  border-style: solid;
  border-radius: 50%;
}
`

// <MDXRenderer>{body}</MDXRenderer>
// <Socials/>

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
        <GatsbyImage image={image} alt="Patrick"/>
        <div></div>
      </ImageGrid>
    </Container>
  )
}