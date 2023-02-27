import React from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"

const Container = styled.div`
`

const Grid = styled.div`
    padding: 1rem 0;
    margin: 0rem 0rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 1rem;
`

const ProjectSection = ( { data } ) => (
  <Container>
    <Grid>
      {data.nodes.map(({ frontmatter, fields }) => (
        <ProjectCard key={frontmatter.title} frontmatter={frontmatter} fields={fields} />
      ))}
    </Grid>
  </Container>
)
export default ProjectSection;