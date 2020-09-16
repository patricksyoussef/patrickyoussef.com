import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import { Underline } from "../components/Underline"

const StyledH1 = styled.p`
  color: ${props => props.theme.colors.dark1};
  font-family: ${props => props.theme.fonts.main};
`
const StyledP = styled.p`
  color: ${props => props.theme.colors.dark1};
  font-family: ${props => props.theme.fonts.main};
`

export default ({ data }) => {
  return (
    <Layout>
      <StyledH1>This is for titles!</StyledH1>
      <StyledP>This is for content!</StyledP>
      <code>This is for code!</code>
      <div>
        <Underline>
          <h2>Posts</h2>
        </Underline>
        <div>
          {data.blog.nodes.map(({ frontmatter, fields }) => (
            <div>
              <Link to={frontmatter.slug}>
                <h2>{frontmatter.title}</h2>
              </Link>
              <p>{frontmatter.date}</p>
              <p>{fields.readingTime.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Underline>
          <h2>Projects</h2>
        </Underline>
        <div>
          {data.projects.nodes.map(({ frontmatter, fields }) => (
            <div>
              <Link to={frontmatter.slug}>
                <h2>{frontmatter.title}</h2>
              </Link>
              <p>{frontmatter.date}</p>
              <p>{fields.readingTime.text}</p>
            </div>
          ))}
        </div>
      </div>
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
          date(formatString: "YYYY MMMM Do")
          title
        }
        fields {
          readingTime {
            text
          }
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
          date(formatString: "YYYY MMMM Do")
          title
        }
        fields {
          readingTime {
            text
          }
        }
      }
    }
  }
`
