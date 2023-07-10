import React from "react";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const Container = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  grid-gap: ${theme.grid.gap};
`)

const BlogSection = ({ data }) => (
  <Container>
    {data.nodes.map(({ frontmatter, fields }) => (
      <BlogCard key={frontmatter.title} frontmatter={frontmatter} fields={fields} />
    ))}
  </Container>
)
export default BlogSection;