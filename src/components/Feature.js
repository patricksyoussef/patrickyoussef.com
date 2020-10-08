import React from "react"
import styled from "styled-components"
import { FeatureImage } from "../components/FeatureImage"

const TopFeature = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  height: min-content;
  box-shadow: ${props => props.theme.shadows.s1};
  border-radius: 15px;
  border-color: ${props => props.theme.colors.text_gray};
  border-width: 1px;
  border-style: solid;
  overflow: hidden;

  > div {
    grid-row-start: 1;
    grid-column-start: 1;
  }
`
const FeatureImageContainer = styled.div`
  margin: -0.25rem;
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
  margin: 2rem 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`
const Title = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.main};
`
const SubTitle = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts.sub};

  p,
  div {
    width: fit-content;
  }
`
const Spacer = styled.div`
  margin: 0 0.5rem;
`

export const Feature = ({ frontmatter, fields }) => {
  return (
    <TopFeature>
      <FeatureImageContainer>
        <FeatureImage frontmatter={frontmatter}></FeatureImage>
      </FeatureImageContainer>
      <Header>
        <div>
          <Title>{frontmatter.title}</Title>
          <SubTitle>
            <p>{frontmatter.date}</p>
            <Spacer>|</Spacer>
            <p>{fields.readingTime.text}</p>
          </SubTitle>
        </div>
      </Header>
    </TopFeature>
  )
}
