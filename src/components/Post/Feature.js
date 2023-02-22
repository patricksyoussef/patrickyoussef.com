// This creates the title and feature box at the top of the blog posts
// This is imported by blog-post.js

import React from "react"
import styled from "styled-components"
import FeatureImage from "./FeatureImage"

const Container = styled.div`
  height: min-content;
  overflow: hidden;
  border-radius: ${props => props.theme.radii.heading};
  border-width: 1px;
  border-color: ${props => props.theme.colors.text_gray};
  border-style: solid;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: ${props => props.theme.shadows.s1};
  margin-bottom: 1rem;

  > div {
    grid-row-start: 1;
    grid-column-start: 1;
  }
`
const FeatureImageContainer = styled.div`
  margin: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0.2;
  filter: blur(3px);

  FeatureImage {
    background-color: black;
  }
  * {
    width: 100%;
    height: 100%;
  }
`
const Header = styled.div` 
  min-height: 7rem;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const Title = styled.span`
  font-size: 2rem;
  font-weight: 500;
`
const SubTitle = styled.span`
  display: flex;
  font-size: 1rem;
  width: fit-content;

  * {
    margin: 0 !important;
  }

  p, div {
    width: fit-content;
  }
`
const Spacer = styled.div`
  margin: 0 0.5rem !important;
`
const Centering = styled.div`
display: inline-block;
`

const Feature = ({ frontmatter, fields }) => {
  return (
    <Container>
      <FeatureImageContainer>
        <FeatureImage frontmatter={frontmatter} />
      </FeatureImageContainer>
      <Header>
        <Centering>
          <Title>{frontmatter.title}</Title>
          <SubTitle>
            <p>{frontmatter.date}</p>
            <Spacer>·</Spacer>
            <p>{fields.readingTime.text}</p>
          </SubTitle>
        </Centering>
      </Header>
    </Container>
  )
}
export default Feature;