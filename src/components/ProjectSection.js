import React from "react"
import styled from "styled-components"
import ProjectCard from "./ProjectCard"

const Container = styled.div`
  margin-bottom: 0.5rem;
`

const Grid = styled.div`
    padding: 1rem 0;
    margin: 0rem ${props => props.theme.spacings.wall};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 1.25rem;
`

const ProjectSection = ( { data } ) => (
  <Container>
    <Grid>
      {data.nodes.map(({ frontmatter, fields }) => (
        <ProjectCard
          frontmatter={frontmatter}
          fields={fields} />
      ))}
    </Grid>
  </Container>
)
export default ProjectSection;