// Template for a blog post, mostly just styling and pulling graphql data
// for a particular blog given the "context" info given in gatsby-node.js

import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"


export const Head = ({ data: { mdx: { frontmatter, fields }, site } }) => {
  // This is obnoxiously long to put below
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

const MDXContent = styled.div(({ theme }) => `
  // Sizing
  max-width: ${theme.widths.content};
  margin: 0 auto;

  // Headings
  h1, h2, h3, h4 {
    svg {
      height: 0.75em;
      width: 0.75em;
      margin: 0.3em 0.1em;
    }
  }

  // Link Style
  a {
    font-weight: 500;
    &:visited {
      color: ${theme.colors.links.visited} !important;
    }
  }


  // Image and Video
  .gatsby-resp-image-wrapper, video {
    overflow: hidden;
    border: 0px solid;
    border-radius: 10px;
    box-shadow: ${theme.shadow};
    margin: 1em 0em;
  }

  figcaption {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.fonts.code};
    font-size: 1rem;
  }

  .gatsby-resp-image-figure {
    margin: 1rem auto;
  }
  
  // Inline Code
  code {
    font-size: 0.8em;
    border: 1px solid #999999;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.04);
    padding: 2px;
    color: black;
  }

  // Blockquote
  blockquote {
    background-color: rgba(0, 0, 0, 0.04);
    padding: 0.75rem 1.25rem;
    border-left: 0.3rem solid  ${theme.colors.primary};
    margin: 0rem;
    margin-top: 0.5rem;
    p {
      margin: 0;
    }
  }

  // Table
  table {
    margin: 0 auto;
    thead {
      border-bottom: 0.15rem solid  ${theme.colors.primary};
      th {
        padding: 0.5rem;
        border: 1px solid black;
        font-weight: 500;
      }
    }
    
    tbody {
      td {
        text-align: center;
        padding: 0.5rem 0.5rem;
        border: 1px solid black;
      }
    }
  }

  
  
`)

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