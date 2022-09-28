// The template for the about page, this could use more styling and content
// but it works for now. All body is imported as an MDX with the query on the
// bottom.

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"


const Container = styled.div`
  margin: 1.5rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyleBox = styled.div`
border-style: solid;
border-width: 1px;
border-radius:15px;
border-color: ${props => props.theme.colors.text_gray};
box-shadow: ${props => props.theme.shadows.s1};
overflow: hidden;
div[class^="gbi"] {
  height: 100%
}
`

const ContentBox = styled.div`
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
    <Layout>
      <Container>
        <Helmet>
          <title>
            {frontmatter.title} | {site.siteMetadata.title}
          </title>
        </Helmet>
        <ContentBox>
          <StyleBox>
              <Content>
              <MDXRenderer>{body}</MDXRenderer>
            </Content>
          </StyleBox>
        </ContentBox>
      </Container>
    </Layout>
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
          featureImage {
            childImageSharp {
              gatsbyImageData(width:1200, height:1400, transformOptions:{cropFocus:ENTROPY}, formats: JPG, placeholder: BLURRED)
            }
          }
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