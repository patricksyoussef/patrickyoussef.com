// All the styling for a listing card for a particular post, you'll find these
// in lists on the homepage and on "All Posts"

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  * {
    margin: 0;
  }
  margin-bottom: 0.5rem;
`
const Post = styled.div`
  transition: ${props => props.theme.anims.link};
  padding: 0.6rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.4rem;

  &:hover {
    border-color: ${props => props.theme.colors.text_gray};
    box-shadow: ${props => props.theme.shadows.s1};

    * {
      border-color: ${props => props.theme.colors.blue};
    }
  }

  &:hover p {
    color: black;
  }

  p {
    transition: ${props => props.theme.anims.link};
    color: ${props => props.theme.colors.text_gray};
  }

  h2 {
    margin-bottom: 0rem;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`

const Excerpt = styled.p`
margin-top: 0.35rem;
`

export const ListCard = ({ frontmatter, fields }) => {
  return (
    <Container>
      <StyledLink to={fields.path}>
        <Post>
          <h2>{frontmatter.title}</h2>
          <p>
            {frontmatter.date} · {fields.readingTime.text}
          </p>
          <Excerpt>
            {frontmatter.excerpt}
          </Excerpt>
        </Post>
      </StyledLink>
    </Container>
  )
}
