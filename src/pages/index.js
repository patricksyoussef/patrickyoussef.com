import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { IndexSection } from "../components/IndexSection"

export default ({ data }) => {
  return (
    <Layout>
      <Hero />
      <IndexSection
        data={data.blog}
        title={"Posts"}
        linktext={"All posts"}
        path={"/blog/"}
      ></IndexSection>
      <IndexSection
        data={data.projects}
        title={"Projects"}
        linktext={"All projects"}
        path={"/projects/"}
      ></IndexSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    blog: allMdx(
      limit: 4
      skip: 0
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "blog-post" }
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          title
        }
        fields {
          readingTime {
            text
          }
          path
        }
      }
    }
    projects: allMdx(
      limit: 4
      skip: 0
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "project-post" }
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          title
        }
        fields {
          readingTime {
            text
          }
          path
        }
      }
    }
  }
`
