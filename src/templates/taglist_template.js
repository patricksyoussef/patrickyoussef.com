// Page template for listing out all blog posts (or a limited amount, whatever
// is passed).

import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { Underline } from "../components/Underline"
import { ListCard } from "../components/ListCard"
import styled from "styled-components"

const Container = styled.div`
    margin: 0 auto;
`

export default ({ data, pageContext }) => {

  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <Underline>
          <h1>All Posts With Tag: {pageContext.tag}</h1>
        </Underline>
        <div>
          {data.allMdx.nodes.map(({ frontmatter, fields }) => (
            <ListCard frontmatter={frontmatter} fields={fields}></ListCard>
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query TagListing($tag: String!)  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          published: { eq: true }
          tags: { in: [$tag] }
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY MMMM Do")
          excerpt
          tags
        }
        fields {
          readingTime {
            text
          }
          path
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`