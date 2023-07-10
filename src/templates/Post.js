// Template for a blog post, mostly just styling and pulling graphql data
// for a particular blog given the "context" info given in gatsby-node.js

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";
import Feature from "../components/post/Feature";

export const Head = ({ data: { mdx: { frontmatter, fields }, site } }) => {
  // This is obnoxiously long to put below
  let image = frontmatter.featureImage.childImageSharp.original.src
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

  // Link
  a {
    font-weight: 500;
    text-decoration: underline ${theme.colors.background};
    transition: text-decoration-color ${theme.transitions.main};
    color: ${theme.colors.links.normal};
    &:visited {
      color: ${theme.colors.links.visited};
    }

    &:hover, &:focus {
      text-decoration: underline;
      text-decoration-color: inherit;
    }
  }

  // Image and Video
  .gatsby-resp-image-wrapper, video {
    max-width: 700px !important;
    overflow: hidden;
    border: 1px solid ${theme.colors.borders};
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
    border: 1px solid ${theme.colors.borders};
    border-radius: 5px;
    background-color: ${theme.background_darken};
    padding: 2px;
    color: black;
  }

  // Blockquote
  blockquote {
    background-color: ${theme.background_darken};
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
  
  // Footnotes
  .footnotes {
    hr {
      color: ${theme.colors.borders};
    }
  }
`)

const BlogPost = ({ data }) => {
  const { frontmatter, fields, body } = data.mdx
  return (
    <Container>
      <MDXContent>
        <Feature frontmatter={frontmatter} fields={fields} />
        <MDXRenderer>{body}</MDXRenderer>
      </MDXContent>
    </Container>
  )
}
export default BlogPost

export const query = graphql`
  query BlogByPath($post_id: String!) {
    ...SiteMetadata
    mdx(fields: { path: { eq: $post_id } }) {
      body
      ...PostElements
    }
  }
`