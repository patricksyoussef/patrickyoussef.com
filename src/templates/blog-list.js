import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { Underline } from "../components/Underline"
import { ListCard } from "../components/ListCard"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Underline>
        <h1>Blog Posts</h1>
      </Underline>
      <div>
        {data.blog.nodes.map(({ frontmatter, fields }) => (
          <ListCard frontmatter={frontmatter} fields={fields}></ListCard>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BlogListing($skip: Int!, $limit: Int!) {
    blog: allMdx(
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
