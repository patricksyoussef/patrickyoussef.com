import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ProjectSection from "../components/ProjectSection"
import BlogSection from "../components/BlogSection"
import Divider from "../components/Divider"

const index = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <description>{data.site.siteMetadata.description}</description>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl}/>
        <meta name="description" content={data.site.siteMetadata.description}/>
      </Helmet>
      <Hero data={data.hero}/>
      <Divider
        data={data.project}
        title={"Projects"}
        linktext={"All Projects"}
        path={"/projects/"} />
      <Divider 
        data={data.blog}
        title={"Recent Posts"}
        linktext={"All posts"}
        path={"/blog/"}/>
    </Layout>
  )
}
export default index;

export const query = graphql`
  query {
    hero: allMdx(
      filter: {
        frontmatter: {
          templateKey: { eq: "hero-text" }
        }
      }
    ) {
      nodes {
        frontmatter {
          title
          featureImage {
            childImageSharp {
              gatsbyImageData(width:400, formats: PNG, layout:FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        body
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    project: allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "project" }
          pinned: {eq: true}
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          title
          featureImage {
            childImageSharp {
              gatsbyImageData(width:400, formats: JPG, placeholder: BLURRED)
            }
          }
        }
        fields {
          path
        }
      }
    }
    blog: allMdx(
      limit: 4
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
          path
          readingTime {
            text
          }
        }
      }
    }
  }
`