import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import ProjectSection from "../components/ProjectSection"

const Container = styled.div`
`
const projects = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Projects | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <ProjectSection 
            data={data.project}
            title={"All Projects"}
            linktext={""}
            path={"/projects/"}/>
      </Container>
    </Layout>
  )
}
export default projects;

export const query = graphql`
  query AllProjects {
    project: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "project" }
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
          featureImage {
            childImageSharp {
              gatsbyImageData(width:400, formats: JPG, placeholder: BLURRED)
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
    site {
      siteMetadata {
        title
      }
    }
  }
`