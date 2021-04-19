import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"
import { ProjectCard } from "./ProjectCard"

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

const TopContent = styled.span`
  * {
    margin: 0.2rem 0;
  }

  font-family: ${props => props.theme.fonts.main};

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkText = styled.h3`
  color: ${props => props.theme.colors.text_gray};
  transition: ${props => props.theme.anims.link};
  font-family: ${props => props.theme.fonts.sub};

  &:hover {
    color: ${props => props.theme.colors.text_dark};
  }
`

export const ProjectSection = ( { data, title, path, linktext } ) => (
    <Container>
      <Underline>
          <TopContent>
          <h1>{title}</h1>
          <Link to={path}>
              <LinkText>{linktext}</LinkText>
          </Link>
          </TopContent>
      </Underline>
      <Grid>
        {data.nodes.map(({ frontmatter, fields }) => (
          <ProjectCard
            frontmatter={frontmatter}
            fields={fields} />
        ))}
      </Grid>
    </Container>
  )
  