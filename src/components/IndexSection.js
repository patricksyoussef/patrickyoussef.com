import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"

const Container = styled.div`
  margin-bottom: 2rem;
`

export const IndexSection = ({ data, title, path, linktext }) => (
  <Container>
    <Underline>
      <h1>{title}</h1>
    </Underline>
    <div>
      {data.nodes.map(({ frontmatter, fields }) => (
        <div>
          <Link to={fields.path}>
            <h2>{frontmatter.title}</h2>
          </Link>
          <p>{frontmatter.date}</p>
          <p>{fields.readingTime.text}</p>
        </div>
      ))}
    </div>
  </Container>
)
