// This creates the title and feature box at the top of the blog posts
// This is imported by blog-post.js

import React from "react"
import styled from "styled-components"
import { FeatureImage } from "../components/FeatureImage"

const Container = styled.div`
  height: min-content;

  overflow: hidden;
  border-radius: 15px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.text_gray};
  border-style: solid;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: ${props => props.theme.shadows.s1};
  margin-bottom: 1.75rem;

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
  filter: blur(2px);

  FeatureImage {
    background-color: black;
  }

  * {
    width: 100%;
    height: 100%;
  }
`
const Header = styled.div`
  min-height: 9rem;
  margin: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`
const Title = styled.span`
  font-size: 1.9rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.main};
`
const SubTitle = styled.span`
  display: flex;
  font-size: 1.2rem;
  font-family: ${props => props.theme.fonts.sub};
  width: fit-content;

  * {
    margin: 0;
  }

  p,
  div {
    width: fit-content;
  }
`
const Spacer = styled.div`
  margin: 0 0.5rem;
`

const Centering = styled.div`
display: inline-block;
  * {
  }
`

export const Feature = ({ frontmatter, fields }) => {
  return (
    <Container>
      <FeatureImageContainer>
        <FeatureImage frontmatter={frontmatter}></FeatureImage>
      </FeatureImageContainer>
      <Header>
        <Centering>
          <Title>{frontmatter.title}</Title>
          <SubTitle>
            <p>{frontmatter.date}</p>
            <Spacer>|</Spacer>
            <p>{fields.readingTime.text}</p>
          </SubTitle>
        </Centering>
      </Header>
    </Container>
  )
}
