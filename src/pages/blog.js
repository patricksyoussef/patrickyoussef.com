import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import BlogSection from "../components/BlogSection"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
`

const blog = ({ data }) => {

  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <BlogSection data={data.blog} _years={true}/>
      </Container>
    </Layout>
  )
}
export default blog;

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
          date(formatString: "MMMM Do, YYYY")
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