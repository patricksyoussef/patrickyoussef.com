// Template for a blog post, mostly just styling and pulling graphql data
// for a particular blog given the "context" info given in gatsby-node.js

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"


export const Head = ({ data: { mdx: { frontmatter, fields }, site } }) => {
  let image = frontmatter.featureImage.childImageSharp.fixed.src
  return (
    <>
      <title>{frontmatter.title} | {site.siteMetadata.author}</title>

      <meta property='og:url' content={['https://patrickyoussef.com', fields.path].join('')} />
      <meta property="og:type" content="website" />
      <meta property='og:title' content={frontmatter.title} />
      <meta property='og:description' content={frontmatter.excerpt} />
      <meta property='og:image' content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="patrickyoussef.com" />
      <meta property="twitter:url" content={['https://patrickyoussef.com', fields.path].join('')} />
      <meta name="twitter:title" content={frontmatter.title} />
      <meta name="twitter:description" content={frontmatter.excerpt} />
      <meta name="twitter:image" content={image} />
    </>
  )
}


const Container = styled.div`
`

const MDXContent = styled.div`
`

const BlogPost = ({ data }) => {
  const { frontmatter, fields, body, tableOfContents } = data.mdx

  return (
    <Container>
      <MDXContent>
        <MDXRenderer>{body}</MDXRenderer>
      </MDXContent>
    </Container>
  )
}
export default BlogPost

export const query = graphql`
  query BlogByPath($post_id: String!) {
    mdx(fields: { path: { eq: $post_id } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        featureImage {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, transformOptions: {cropFocus: ATTENTION})
            fixed(height: 500) {
              src
            }
          }
        }
      }
      fields {
        path
        readingTime{
          text 
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