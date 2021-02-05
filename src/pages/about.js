// The template for the about page, this could use more styling and content
// but it works for now. All body is imported as an MDX with the query on the
// bottom.

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const TextBox = styled.div`

display: flex;

border-style: solid;
border-width: 1px;
border-radius:15px;
max-width: ${props => props.theme.widths.content};
margin: 3rem auto;
box-shadow: ${props => props.theme.shadows.s1};
overflow: hidden;
`

const Content = styled.div`
padding: 0 1rem;
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
        <TextBox>
          <Content>
            <MDXRenderer>{body}</MDXRenderer>
          </Content>
        </TextBox>
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
              fluid(cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
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
