import { graphql } from 'gatsby'
import React from "react"
import styled from "styled-components"
import ContentGrid from "../components/ContentGrid"
import Hero from "../components/Hero"

// Head Export
export const Head = ({ data: { site } }) => {
  return (
    <title>Home | {site.siteMetadata.author}</title>
  )
}

const Container = styled.div(({ theme }) => `
  .griditems {
    min-height: 300px;
    border: black solid 1px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`)


const Index = ({ data }) => {
  return (
    <Container>
      <ContentGrid>
        <Hero data={data.hero} />
        <div className="griditems" style={{ gridColumn: "span 2", gridRow: "span 1" }}>Not Hero</div>
        <div className="griditems" style={{ gridColumn: "span 1", gridRow: "span 1" }}>Not Hero</div>
        <div className="griditems" style={{ gridColumn: "span 1", gridRow: "span 1" }}>Not Hero</div>
        <div className="griditems" style={{ gridColumn: "span 1", gridRow: "span 1" }}>Not Hero</div>
        <div className="griditems" style={{ gridColumn: "span 2", gridRow: "span 1" }}>Not Hero</div>
        <div className="griditems" style={{ gridColumn: "span 1", gridRow: "span 1" }}>Not Hero</div>
      </ContentGrid>
    </Container>
  )
}
export default Index

export const query = graphql`
query IndexQuery {
  site {
    siteMetadata {
      author
    }
  }

  hero: allMdx(filter: {frontmatter: {templateKey: {eq: "hero"}}}) {
    nodes {
      body
    }
  }
}`