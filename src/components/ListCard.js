import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div``
const Post = styled.div`
  margin: 0.4rem 0;
  transition: ${props => props.theme.anims.link};
  padding: 0.6rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.4rem;

  &:hover {
    border-color: gray;
    box-shadow: ${props => props.theme.shadows.s1};
  }
`
export const ListCard = ({ frontmatter, fields }) => {
  return (
    <Container>
      <Link to={fields.path}>
        <Post>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.date}</p>
          <p>{fields.readingTime.text}</p>
        </Post>
      </Link>
    </Container>
  )
}
