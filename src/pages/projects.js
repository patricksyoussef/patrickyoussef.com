import React from "react"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { ProjectSection } from "../components/ProjectSection"

const Container = styled.div`
`
export default ({ data }) => {

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
    site {
      siteMetadata {
        title
      }
    }
  }
`