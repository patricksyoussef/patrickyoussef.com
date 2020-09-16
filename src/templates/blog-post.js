import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout } from "../components/Layout"

export default ({ data }) => {
  const { frontmatter, fields, body } = data.mdx
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <p>{fields.readingTime.text}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
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
`
