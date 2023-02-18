// Imports ListCard.js and iterated through the nodes that are passed into
// here. This creates the list of blog posts on the home page and on the 
// "All Posts" page.

import React from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"

const Container = styled.div`
  margin-bottom: 1rem;

  h1,h2 {
    margin-bottom: 0rem;
    font-family: ${props => props.theme.fonts.main};
    font-weight: 400;
    margin: 0.25rem !important;
  }
`

const Content = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 0rem;
  margin: 0rem 0rem;
`

const BlogSection = ({ data, _years=false }) => {
  let pairs = {}
  for (let idx in data.nodes) {
    let post = data.nodes[idx]
    let year = post.frontmatter.date.slice(-4)
    if (!(year in pairs)) {
      pairs[year] = []
    }
    pairs[year].push(post)
  }

  // Reversing order so that most recent is on top
  let years = Object.keys(pairs).sort().reverse()

  // Used to return blog cards for a set of posts passed
  function print_cards(nodes) {
    return nodes.map(({ frontmatter, fields }) => (
      <BlogCard key={frontmatter.title} frontmatter={frontmatter} fields={fields} />
    ))
  }

  // Determining what to fill based on whether years are present
  var content = null
  if (_years) {
    content = years.map((year) => (<div><h1>{year}</h1>{print_cards(pairs[year])}</div>))
  } else {
    content = print_cards(data.nodes)
  }
  
  return (
  <Container>
    <Content>
      {content}
    </Content>
  </Container>
  ) 
}
export default BlogSection;