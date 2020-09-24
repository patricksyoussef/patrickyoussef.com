import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { Underline } from "../components/Underline"
import { ListCard } from "../components/ListCard"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Projects | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Underline>
        <h1>You can find the rest of my projects here.</h1>
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
  query ProjectListing($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
      filter: {
        frontmatter: {
          templateKey: { eq: "project-post" }
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
