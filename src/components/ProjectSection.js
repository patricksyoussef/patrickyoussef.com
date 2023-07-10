import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

const Container = styled.div(({ theme }) => `
`)

const ProjectSection = ({ data }) => (
  <Container>
    {data.nodes.map(({ frontmatter, fields }) => (
      <ProjectCard key={frontmatter.title} frontmatter={frontmatter} fields={fields} />
    ))}
  </Container>
)
export default ProjectSection;