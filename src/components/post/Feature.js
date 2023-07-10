import React from "react"
import styled from "styled-components"
import FeatureImage from "./FeatureImage"

const Container = styled.div(({ theme }) => `
  // Outer Style
  // box-shadow: ${theme.shadow};
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  padding: 2rem 0rem;
`)

const Title = styled.span(({ theme }) => `
  font-size: 2rem;
  font-weight: 500;
`)

const SubTitle = styled.div(({ theme }) => `
  display: flex;
  flex-direction: row;
`)

const SubTitleElem = styled.span(({ theme }) => `
  font-size: 1.25rem;
`)

const Spacer = styled.div`
  margin: 0 0.5rem !important;
`

const Feature = ({ frontmatter, fields }) => {
  return (
    <Container>
      <FeatureImage frontmatter={frontmatter} />
      <Header>
        <Title>{frontmatter.title}</Title>
        <SubTitle>
          <SubTitleElem>{frontmatter.date}</SubTitleElem>
          <Spacer>{"·"}</Spacer>
          <SubTitleElem>{fields.readingTime.text}</SubTitleElem>
        </SubTitle>
      </Header>
    </Container>
  )
}
export default Feature;