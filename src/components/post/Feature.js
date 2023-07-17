import React from "react"
import styled from "styled-components"
import FeatureImage from "./FeatureImage"

const Container = styled.div(({ theme }) => `
  // Outer Style
  border-radius: ${theme.radii.feature};
  border: 1px solid ${theme.colors.borders};
  overflow: hidden;
  margin: 1em auto;

  // Grid Layout for Stack
  display: grid;
  grid-template-columns: 1fr;

  > div {
    grid-row-start: 1;
    grid-column-start: 1;
  }
`)

const Header = styled.div(({ theme }) => `
  padding: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`)

const Title = styled.span(({ theme }) => `
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`)

const SubTitle = styled.div(({ theme }) => `
  display: flex;
  flex-direction: row;
  span:not(:last-child) {
    margin-right: 0.5rem;
  }
`)

const SubTitleElem = styled.span(({ theme }) => `
  font-size: 1.25rem;
`)


const Feature = ({ frontmatter, fields }) => {
  return (
    <Container>
      <FeatureImage frontmatter={frontmatter} />
      <Header>
        <Title>{frontmatter.title}</Title>
        <SubTitle>
          <SubTitleElem>{frontmatter.date}</SubTitleElem>
          <SubTitleElem>{"·"}</SubTitleElem>
          <SubTitleElem>{fields.readingTime.text}</SubTitleElem>
        </SubTitle>
      </Header>
    </Container>
  )
}
export default Feature;