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

  .gatsby-resp-image-figure {
    margin: 1rem auto;
    max-width: 500px !important;
  }

  .gatsby-resp-image-wrapper {
      border-radius: 0.5rem;
      overflow: hidden;
      margin-bottom: 0.5rem;
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
  }

  ol,
  ul {
    padding-left: 2.2rem;
  }

  h1 {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: ${props => props.theme.colors.text_gray};
  }

  h2 {
    font-style: bold;
  }
`

const Content = styled.div`
  padding: 0 0rem;

  p,
  li {
    font-size: 1.1rem;
    font-family: ${props => props.theme.fonts.sub};
  }

  p,
  ol {
    margin-bottom: 1rem;
  }

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

  code {
    border-radius: 3px;
    background-color: #e0e0e0;
    padding: 0.1rem;
  }

  a {
    color: ${props => props.theme.colors.text_link};
    font-weight: 600;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${props => props.theme.colors.text_link};
      visibility: hidden;
      transition: ${props => props.theme.anims.link};
    }

    &:hover:before {
      visibility: visible;
      width: 100%;
    }
  }

  blockquote {
    background-color: rgba(220, 221, 230, 0.4);
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-left-style: solid;
    border-left-width: 0.3rem;
    border-left-color: ${props => props.theme.colors.blue};
    font-style: italic;
    margin-bottom: 1rem;
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
