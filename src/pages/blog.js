// Page template for listing out all blog posts (or a limited amount, whatever
// is passed).

import { graphql, Link } from "gatsby"
import React from "react"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"
import { Underline } from "../components/Underline"
import { ListCard } from "../components/ListCard"
import styled from "styled-components"
const _ = require("lodash")

const Container = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
`

const ContentWidth = styled.div`
  padding: 0.5rem 0rem;
  margin: 0rem ${props => props.theme.spacings.wall};
`

const TagCards = styled.div`
margin-top: 0.6rem;
display:flex;
flex-direction: row;
justify-content: center;
`

const TagCard = styled.p`
padding: 0.5rem;
margin-right: 0.6rem;
border-style: solid;
border-width: 1px;
border-radius: 5px;
`

export default ({ data }) => {

  console.log(data)

  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <Underline>
          <TagCards>
            {data.tags.group.map(({ fieldValue }) => (
              <Link to={"tags/".concat(_.kebabCase(fieldValue))}>
                <TagCard>{fieldValue}</TagCard>
              </Link>
            ))}
          </TagCards>
        </Underline>
        <ContentWidth>
          {data.blog.nodes.map(({ frontmatter, fields }) => (
            <ListCard frontmatter={frontmatter} fields={fields}></ListCard>
          ))}
        </ContentWidth>
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
