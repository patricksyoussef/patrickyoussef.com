import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import {IndexSection} from "../components/IndexSection"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
`

export default ({ data }) => {

  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <IndexSection
          data={data.blog}
          title={"All Posts"}
          linktext={""}
          path={"/blog/"}/>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query AllBlogPosts {
    blog: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          published: { eq: true }
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "YYYY MMMM Do")
          excerpt
          tags
        }
        fields {
          readingTime {
            text
          }
          path
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    tags: allMdx(filter: {frontmatter: {published: {eq: true}, templateKey: {eq: "blog-post"}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
