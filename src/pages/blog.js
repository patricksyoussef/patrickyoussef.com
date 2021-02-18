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
`

const ContentWidth = styled.div`
  padding: 0.5rem 0rem;
  margin: 0rem ${props => props.theme.spacings.wall};
`

const TagCards = styled.div`
padding: 0.5rem 1rem;
display:flex;
flex-wrap: wrap;
margin: 0rem 0rem;
margin-bottom: 1rem;
border-left: solid 0.3rem;
border-left-color: ${props => props.theme.colors.blue};
background-color: ${props => props.theme.colors.bqbg};
border-radius: 0.3rem;
`

const TagCard = styled.div`
padding: 0.5rem;
border-style: solid;
border-width: 1px;
border-radius: 5px;
margin: 0.3rem 0;
margin-right: 0.6rem;
border-color: ${props => props.theme.colors.blue};
transition: ${props => props.theme.anims.button};
background-color: ${props => props.theme.colors.light1};
&:hover {
    background-color: ${props => props.theme.colors.res_button};
  }
`

export default ({ data }) => {

  let tag_list = data.tags.group

  return (
    <Layout>
      <Helmet>
        <title>Blog | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <Underline>
          <h1>
            All Posts
          </h1>
        </Underline>
        <ContentWidth>
          <TagCards>
            {tag_list.sort((a, b) => (b.totalCount - a.totalCount)).map(({ fieldValue }) => (
              <Link to={"tags/".concat(_.kebabCase(fieldValue))}>
                <TagCard>{fieldValue}</TagCard>
              </Link>
            ))}
          </TagCards>
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
