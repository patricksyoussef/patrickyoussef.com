import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"

const Container = styled.div``
const TopBar = styled.div``
const TopContent = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 2rem;
`

export const IndexSection = ({ data, title, path, linktext }) => (
  <Container>
    <TopBar>
      <Underline>
        <TopContent>
          <h1>{title}</h1>
          <Link to={path}>
            <h3>{linktext}</h3>
          </Link>
        </TopContent>
      </Underline>
    </TopBar>
    <Content>
      {data.nodes.map(({ frontmatter, fields }) => (
        <div>
          <Link to={fields.path}>
            <h2>{frontmatter.title}</h2>
          </Link>
          <p>{frontmatter.date}</p>
          <p>{fields.readingTime.text}</p>
        </div>
      ))}
    </Content>
  </Container>
)
