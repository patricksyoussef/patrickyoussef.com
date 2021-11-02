// The template for the about page, this could use more styling and content
// but it works for now. All body is imported as an MDX with the query on the
// bottom.

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentBox = styled.div`
  border-style: solid;
  border-width: 1px;
  border-radius:15px;
  box-shadow: ${props => props.theme.shadows.s1};
  overflow: hidden;
  display: flex;
  max-width: ${props => props.theme.widths.content};
  margin: 1rem auto;
  `
const Content = styled.div`
  padding: 0 1rem;

  h1 {
    font-family: ${props => props.theme.fonts.main};
  }

  p {
    font-family: ${props => props.theme.fonts.sub};
  }
`

export default function Home({ data }) {
  const { site, about } = data
  const { frontmatter, body } = about.nodes[0]
  return (
    <Container>
      <Helmet>
        <title>
          {frontmatter.title} | {site.siteMetadata.title}
        </title>
      </Helmet>
      <ContentBox>
        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </ContentBox>
    </Container>
  )
}

export const query = graphql`
  query MyQuery {
    about: allMdx(
      filter: { frontmatter: { templateKey: { eq: "about-page" } } }
    ) {
      nodes {
        frontmatter {
          title
        }
        body
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`