import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { Underline } from "../components/Underline"
import { ListCard } from "../components/ListCard"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  margin: 4rem ${props => props.theme.spacings.wall};
`

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Underline>
        <h1>All Posts</h1>
      </Underline>
      <div>
        {data.allMdx.nodes.map(({ frontmatter, fields }) => (
          <ListCard frontmatter={frontmatter} fields={fields}></ListCard>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogListing($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          published: { eq: true }
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY MMMM Do")
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
