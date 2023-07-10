import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"


const Container = styled.div(({ theme }) => `
  height: 150px;
  background-color: white;
  border: 1px solid ${theme.colors.borders};
  border-radius: 0.5rem;
  box-shadow: ${theme.shadow};
  transition: ${theme.transitions.main};

  &:hover {
    box-shadow: ${theme.shadow_raised};
  }
`)

const BlogCard = ({ frontmatter, fields }) => {
  return (
    <Link to={fields.path}>
      <Container>
        <div>{frontmatter.title}</div>
      </Container>
    </Link >
  )
}
export default BlogCard;