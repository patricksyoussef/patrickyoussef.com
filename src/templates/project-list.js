import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { ListCard } from "../components/ListCard"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Projects | {data.site.siteMetadata.title}</title>
      </Helmet>
      <div>
        {data.projects.nodes.map(({ frontmatter, fields }) => (
          <ListCard frontmatter={frontmatter} fields={fields}></ListCard>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectListing($skip: Int!, $limit: Int!) {
    projects: allMdx(
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
