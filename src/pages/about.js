// The template for the about page, this could use more styling and content
// but it works for now. All body is imported as an MDX with the query on the
// bottom.

import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BackgroundImage from "gatsby-background-image"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ContentBox = styled.div`

border-style: solid;
border-width: 1px;
border-radius:15px;
box-shadow: ${props => props.theme.shadows.s1};
overflow: hidden;
display: flex;
max-width: ${props => props.theme.widths.content};
margin: 1rem auto;
`

const Grid = styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
@media (max-width: 800px) {
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
`

const Image = styled.div`
* {
  @media (max-width: 6000px) {
    height: 100%
  }
  @media (max-width: 800px) {
    min-height: 360px;
  }
}
`

const Content = styled.div`
padding: 0 1rem;
`

export default function Home({ data }) {
  const { site, about } = data
  const { frontmatter, body } = about.nodes[0]
  let featureImg = frontmatter.featureImage.childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>
            {frontmatter.title} | {site.siteMetadata.title}
          </title>
        </Helmet>
        <ContentBox>
          <Grid>
            <Content>
              <MDXRenderer>{body}</MDXRenderer>
            </Content>
            <Image>
              <BackgroundImage fluid={featureImg}></BackgroundImage>
            </Image>
          </Grid>
        </ContentBox>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    about: allMdx(
      filter: { frontmatter: { templateKey: { eq: "about-page" } } }
    ) {
      nodes {
        frontmatter {
          title
          featureImage {
            childImageSharp {
              fluid(cropFocus: CENTER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        body
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
