import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Content = styled.div`
  max-width: ${props => props.theme.widths.content};
  margin: 0 auto;
`

export default function Home({ data }) {
  const { site, about } = data
  const { frontmatter, body } = about.nodes[0]
  console.log(data)
  console.log(about.nodes)
  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {site.siteMetadata.title}
        </title>
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
