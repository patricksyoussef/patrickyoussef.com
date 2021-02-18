// Page template for listing out all blog posts (or a limited amount, whatever
// is passed).

import { graphql } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { IndexSection } from "../components/IndexSection"

const Container = styled.div`
    margin: 0 auto;
`

export default ({ data, pageContext }) => {

  let title = "All ".concat(pageContext.tag).concat(" Posts")

  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <IndexSection
        data={data.allMdx}
        title={title}
        linktext={"All posts"}
        path={"/blog/"}
        ></IndexSection>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query TagListing($tag: String!)  {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          published: { eq: true }
          tags: { in: [$tag] }
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
  }
`