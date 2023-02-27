// Template for a blog post, mostly just styling and pulling graphql data
// for a particular blog given the "context" info given in gatsby-node.js

import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import TableOfContents from "../components/TableOfContents"
import Feature from "../components/Post/Feature"

const Container = styled.div`
  margin-top: 1rem;
`

const Content = styled.div`
// Link Style
  a {
    color: ${props => props.theme.colors.text_link};
    font-weight: 500;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: ${props => props.theme.colors.text_link_visited} !important;
    }
  }
`

const Mdx = styled.div`
  // Header Styles
  h1, h2, h3 {
    svg {
      width: 0.7em;
      height: 0.7em;
      margin: 0.3em 0.1em;
    }
  }

  h1 {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.colors.text_gray};
  }

  // Image/Video
  .gatsby-resp-image-figure {
    margin: 1rem auto;
    margin-bottom: 1.5rem;
  }

  figcaption {
    display: flex;
    justify-content: center;
    font-weight: 500;
    font-size: 1rem;
    color: ${props => props.theme.colors.text_gray};
    font-family: ${props => props.theme.fonts.code};
  }

  .gatsby-resp-image-wrapper, video {
    max-width: 700px !important;
    overflow: hidden;
    margin-bottom: 0.75rem;
    box-shadow: ${props => props.theme.shadows.s1};
    border: solid 1px ${props => props.theme.colors.text_gray};
    border-radius: ${props => props.theme.radii.content};
  }

  // List Styles
  ol, ul {
    padding-left: 1.75rem;
  }

  // Math Styles
  .katex {
    font-size: 1.25rem;
  }

  // Table Style
  table {
    td, tr {
      font-size: 1.25rem;
    }
    margin: 0 auto;
    thead {
      border-bottom: 0.15rem solid  ${props => props.theme.colors.blue};
      th {
        padding: 0.5rem;
        border: 1px solid ${props => props.theme.colors.text_gray};
        font-weight: 500;
      }
    }
    
    tbody {
      td {
        text-align: center;
        padding: 0.5rem 0.5rem;
        border: 1px solid ${props => props.theme.colors.text_gray};
      }
    }
  }

  // Blockquote Style
  blockquote {
    background-color: ${props => props.theme.colors.toc};
    padding: 0.75rem 1.25rem;
    border-left: 0.3rem solid  ${props => props.theme.colors.blue};
    margin: 0rem;
    margin-top: 0.5rem;
    p {
      margin: 0;
    }
  }

  // Inline Code Style
  code {
    font-size: 1rem;
    border: 1px solid #bababa;
    border-radius: 0.25rem;
    background-color: #e0e0e0;
    padding: 0.25rem;
    color: black;
  }
`

const BlogPost = ({ data }) => {
  const { frontmatter, fields, body, tableOfContents } = data.mdx

  // This is obnoxiously long to put below
  let image = frontmatter.featureImage.childImageSharp.gatsbyImageData.images.fallback.src
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {data.site.siteMetadata.title}</title>

        <meta property='og:url' content={ ['https://patrickyoussef.com', fields.path].join('') }/>
        <meta property="og:type" content="website"/>
        <meta property='og:title' content={ frontmatter.title } />
        <meta property='og:description' content={ frontmatter.excerpt } />
        <meta property='og:image' content={ image } />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="patrickyoussef.com"/>
        <meta property="twitter:url" content={ ['https://patrickyoussef.com', fields.path].join('') }/>
        <meta name="twitter:title" content={ frontmatter.title }/>
        <meta name="twitter:description" content={ frontmatter.excerpt }/>
        <meta name="twitter:image" content={ image }/>
      
      </Helmet>
      <Container>
        <Content>
          <Feature frontmatter={frontmatter} fields={fields}/>
          <TableOfContents toc={tableOfContents}/>
          <Mdx>
            <MDXRenderer>{body}</MDXRenderer>
          </Mdx>
        </Content>
      </Container>
    </Layout>
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
        excerpt
        featureImage {
          childImageSharp {
            gatsbyImageData(width:800, formats: JPG, placeholder: BLURRED)
          }
        }
      }
      fields {
        path
        readingTime{
          text 
        }
      }
      tableOfContents(maxDepth: 2)
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
