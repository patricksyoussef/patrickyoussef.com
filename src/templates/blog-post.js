import { graphql } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Layout } from "../components/Layout"
import styled from "styled-components"
import { Helmet } from "react-helmet"

const Container = styled.div`
  margin: 0rem 0;
`
const Header = styled.div`
  margin-bottom: 1rem;
`
const Title = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
`
const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
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
            <p>{fields.readingTime.text}</p>
          </SubTitle>
        </Header>
        <MDXRenderer>{body}</MDXRenderer>
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
