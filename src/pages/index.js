import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Layout } from "../components/Layout"
import { Underline } from "../components/Underline"

const StyledH1 = styled.h1`
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
          <h1>Latest Posts</h1>
        </Underline>
        <div>
          {data.allMdx.nodes.map(({ frontmatter, fields }) => (
            <div>
              <Link to={frontmatter.slug}>
                <h1>{frontmatter.title}</h1>
              </Link>
              <p>{frontmatter.date}</p>
              <p>{fields.readingTime.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Underline>Projects</Underline>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      limit: 4
      skip: 0
      sort: { fields: frontmatter___date, order: DESC }
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
