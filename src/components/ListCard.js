// All the styling for a listing card for a particular post, you'll find these
// in lists on the homepage and on "All Posts"

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  * {
    margin: 0;
  }
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

const TagCards = styled.div`
margin-top: 0.6rem;
display:flex;
flex-direction: row;
`

const TagCard = styled.p`
padding: 0.3rem;
margin-right: 0.6rem;
border-style: solid;
border-width: 1px;
border-radius: 5px;
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
          <TagCards>
            {frontmatter.tags.map((tag) => (
              <TagCard>{tag}</TagCard>
            ))}
          </TagCards>
        </Post>
      </StyledLink>
    </Container>
  )
}
