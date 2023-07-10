import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"


const Container = styled.div(({ theme }) => `
`)

const ProjectCard = ({ frontmatter, fields }) => {
  return (
    <Link to={fields.path}>
      <Container>
        {frontmatter.title}
      </Container>
    </Link >
  )
}
export default ProjectCard;