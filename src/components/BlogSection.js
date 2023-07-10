import React from "react";
import styled from "styled-components";
import BlogCard from "./BlogCard";

const Container = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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