import React from "react";
import styled from "styled-components";
import ContentCard from "./ContentCard";

const Container = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  grid-gap: ${theme.grid.gap};
`)

const BlogSection = ({ data }) => (
  <Container>
    {data.nodes.map(({ frontmatter, fields }) => (
      <ContentCard key={frontmatter.title} frontmatter={frontmatter} fields={fields} />
    ))}
  </Container>
)
export default BlogSection;