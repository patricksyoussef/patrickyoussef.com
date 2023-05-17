// All the styling for a listing card for a particular post, you'll find these
// in lists on the homepage and on "All Posts"

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Container = styled.div`
  * {
    margin: 0;
  }
  margin: 0.5rem 0rem;
`
const Post = styled.div`
  transition: ${props => props.theme.anims.main};
  padding: 0.5rem;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.5rem;

  &:hover {
    border-color: ${props => props.theme.colors.text_gray};
    box-shadow: ${props => props.theme.shadows.s1};
  }

  &:hover p {
    color: black;
  }

  p {
    transition: ${props => props.theme.anims.main};
    color: ${props => props.theme.colors.text_gray};
    font-size: 1.1rem;
    margin-bottom: 0;
  }

  h2,h3,h4 {
    margin-bottom: 0rem;
    font-family: ${props => props.theme.fonts.main};
    font-weight: 400;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
`


const BlogCard = ({ frontmatter, fields }) => {
  // console.log(frontmatter.tags)
  // <p>{frontmatter.tags.sort().join(" · ")}</p>
  return (
    <Container>
      <StyledLink to={fields.path}>
        <Post>
          <h3>{frontmatter.title}</h3>
          <p>{frontmatter.date} · {fields.readingTime.text}</p>
        </Post>
      </StyledLink>
    </Container>
  )
}
export default BlogCard;