import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Content = styled.div`
  margin: 3rem 3rem;
`

export default function Home({ data }) {
  const { site, about } = data
  const { body, frontmatter } = about.nodes[0]
  return (
    <Layout>
      <Helmet>
        <title>About | {site.siteMetadata.title}</title>
      </Helmet>
      <Content>
        <MDXRenderer>{body}</MDXRenderer>
      </Content>
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
