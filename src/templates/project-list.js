import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
        {data.allMdx.nodes.map(({ frontmatter, fields }) => (
          <div>
            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{fields.readingTime.text}</p>
          </div>
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
        }
      }
    }
  }
`
