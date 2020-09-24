import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const Container = styled.div`
  margin: 0 ${props => props.theme.spacings.wall};
  margin-bottom: 2rem;

  .gatsby-resp-image-wrapper {
    margin: 1rem 0;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  ol,
  ul {
    padding-left: 20px;
  }
`
const Header = styled.div`
  margin-bottom: 1rem;
`
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.main};
`
const SubTitle = styled.span`
  display: flex;
  font-size: 1.5rem;
  font-family: ${props => props.theme.fonts.sub};

  p,
  div {
    color: ${props => props.theme.colors.text_gray};
    width: fit-content;
  }
`
const Spacer = styled.div`
  margin: 0 0.5rem;
`
const Content = styled.div`
  padding: 0 0rem;

  p,
  li {
    font-size: 1.25rem;
    font-family: ${props => props.theme.fonts.sub};
  }

  p {
    margin-bottom: 0.75rem;
    font-family: ${props => props.theme.fonts.sub};
  }

  blockquote p {
    margin: 0;
  }

  deckgo-highlight-code {
    font-size: 1.1rem;
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
    margin-bottom: 0.75rem;
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
        <Header>
          <Title>{frontmatter.title}</Title>
          <SubTitle>
            <p>{frontmatter.date}</p>
            <Spacer>|</Spacer>
            <p>{fields.readingTime.text}</p>
          </SubTitle>
        </Header>
        <Content>
          <MDXRenderer>{body}</MDXRenderer>
        </Content>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query BlogByPath($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
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
