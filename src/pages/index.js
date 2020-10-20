import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { IndexSection } from "../components/IndexSection"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
      </Helmet>
      <Hero />
      <IndexSection
        data={data.projects}
        title={"Projects"}
        linktext={"All projects"}
        path={"/projects/"}
      ></IndexSection>
      <IndexSection
        data={data.blog}
        title={"Recent Posts"}
        linktext={"All posts"}
        path={"/blog/"}
      ></IndexSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
        excerpt(pruneLength: 100)
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
        excerpt(pruneLength: 100)
      }
    }
  }
`
