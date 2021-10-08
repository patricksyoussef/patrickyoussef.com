// Template for a blog post, mostly just styling and pulling graphql data
// for a particular blog given the "context" info given in gatsby-node.js

import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Feature } from "../components/Feature"

const Container = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: ${props => props.theme.widths.content};

  video {
    max-width: 550px !important;
  }

  .gatsby-resp-image-figure {
    margin: 1rem auto;
    margin-bottom: 1.5rem;
    max-width: 550px !important;
  }

  .gatsby-resp-image-wrapper, video {
      overflow: hidden;
      margin-bottom: 0.75rem;
      box-shadow: ${props => props.theme.shadows.s1};

      border: solid 1px;
      border-radius: 0.3rem;
      border-color: ${props => props.theme.colors.text_gray};
  }

  .gatsby-resp-image-image {
    background: white;
  }

  img {
    margin: 0 auto;
  }

  figcaption {
    display: flex;
    justify-content: center;

    font-weight: 600;
    font-size: 1rem;
    color: ${props => props.theme.colors.text_gray};
    font-family: ${props => props.theme.fonts.code};
  }

  ol,
  ul {
    padding-left: 1.8rem;
  }

  h1 {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.colors.text_gray};
  }

  h2 {
    font-weight: 800;
  }
`

const Content = styled.div`
  padding: 0 0rem;

  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    font-family: ${props => props.theme.fonts.main};
    color: ${props => props.theme.colors.text_dark};
  }


  p,
  li {
    font-size: 1.1rem;
    font-family: ${props => props.theme.fonts.sub};
    color: ${props => props.theme.colors.text_dark};
  }

  p,
  ol {
    margin-bottom: 1rem;
  }

  // Blockquote style
  blockquote p {
    font-size: 1.25rem;
    margin: 0;
  }

  .prism-code {
    span {
      font-size: 1rem;
      font-family: ${props => props.theme.fonts.code};
    }

    .token-line {
      min-height: 1rem;
    }
  }

  // Inline Code Style
  code {
    border-radius: 2px;
    background-color: #e0e0e0;
    padding: 0.15rem;

    color: ${props => props.theme.colors.text_dark};
  }

  // Link Style
  a {
    color: ${props => props.theme.colors.text_link};
    font-weight: 500;
    position: relative;

    &:hover {
      text-decoration: underline;
    }
  }

  // Blockquote Style
  blockquote {
    background-color: ${props => props.theme.colors.bqbg};
    padding: 0.5rem 1.6rem;
    border-left-style: solid;
    border-left-width: 0.3rem;
    border-left-color: ${props => props.theme.colors.blue};
    font-style: italic;
    margin: 0rem;
  }

  // Table Style
  table {
    margin: auto;

    thead{
      font-family: ${props => props.theme.fonts.sub};
      border-bottom-style: solid;
      border-bottom-width: 0.15rem;
      border-bottom-color: ${props => props.theme.colors.blue};

      th {
        padding: 0.2rem 0.3rem;
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
        border-color: ${props => props.theme.colors.text_gray};
      }
    }

    tbody {
      font-family: ${props => props.theme.fonts.code};

      td {
        text-align: center;
        padding: 0.2rem 0.5rem;
        border-style: solid;
        border-width: 1px;
        border-radius: 5px;
        border-color: ${props => props.theme.colors.text_gray};
      }

      tr {
        margin: 1rem 0 !important;
      }
    }
  }

  // Math Styles
  .mspace {
    padding: 0rem 0;
  }

  // Table of Contents Style
  .table-of-contents {
    * {
      font-family: ${props => props.theme.fonts.sub};
    }
  }
`

export default ({ data }) => {
  const { frontmatter, fields, body } = data.mdx

  return (
    <Layout>
      <Helmet>
        <title>
          {frontmatter.title} | {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <Container>
        <Feature frontmatter={frontmatter} fields={fields}></Feature>
        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogByPath($post_id: String!) {
    mdx(fields: { path: { eq: $post_id } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        featureImage {
          childImageSharp {
            fluid(fit: COVER, cropFocus: CENTER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
        path
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
