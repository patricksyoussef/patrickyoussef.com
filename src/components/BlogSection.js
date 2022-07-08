// Imports ListCard.js and iterated through the nodes that are passed into
// here. This creates the list of blog posts on the home page and on the 
// "All Posts" page.

import React from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"

const Container = styled.div`
`

const Content = styled.div`
margin: 0rem ${props => props.theme.spacings.wall};
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  margin: 0rem ${props => props.theme.spacings.wall};
`

const BlogSection = ({ data }) => (
  <Container>
    <Content>
      {data.nodes.map(({ frontmatter, fields }) => (
        <BlogCard
          frontmatter={frontmatter}
          fields={fields} />
      ))}
    </Content>
  </Container>
)
export default BlogSection;