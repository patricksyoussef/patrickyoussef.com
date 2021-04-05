// Homepage, this mashes all the components together and where most of the 
// graphql info is introduced into ReactJS

import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Hero } from "../components/Hero"
import { IndexSection } from "../components/IndexSection"
import { ProjectSection } from "../components/ProjectSection"
import { Helmet } from "react-helmet"

export default ({ data }) => {
  console.log(data.project)
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <description>{data.site.siteMetadata.description}</description>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl}/>
        <meta name="description" content={data.site.siteMetadata.description}/>
      </Helmet>
      <Hero />
      <ProjectSection
        data={data.project}
        title={"Projects"}
        linktext={"All Projects"}
        path={"/projects/"}
      ></ProjectSection>
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
        description
        siteUrl
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
    project: allMdx(
      limit: 3
      skip: 0
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "project" }
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
    }
  }
`
