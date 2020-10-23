import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import { Feature } from "../components/Feature"

const Container = styled.div`
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 750px;

  .gatsby-resp-image-wrapper {
    margin: 1rem 0;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  ol,
  ul {
    padding-left: 2.2rem;
  }
`

const Content = styled.div`
  padding: 0 0rem;

  p,
  li {
    font-size: 1.25rem;
    font-family: ${props => props.theme.fonts.sub};
  }

  p {
    margin-bottom: 1rem;
  }

  blockquote p {
    font-size: 1.25rem;
    margin: 0;
  }

  .prism-code {
    span {
      font-size: 1.1rem;
      font-family: ${props => props.theme.fonts.code};
    }
  }

  code {
    font-weight: 600;
  }

  a {
    color: ${props => props.theme.colors.text_link};
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }

  blockquote {
    background-color: rgba(220, 221, 230, 0.4);
    padding: 0.5rem 0.5rem 0.5rem 1.2rem;
    border-left-style: solid;
    border-left-width: 0.3rem;
    border-left-color: ${props => props.theme.colors.blue};
    font-style: italic;
    margin-bottom: 1rem;
  }
`

export default ({ data }) => {
  console.log(data)
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
