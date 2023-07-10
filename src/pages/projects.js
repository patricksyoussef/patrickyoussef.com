import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import PageHead from "../components/PageHead"
import ProjectSection from "../components/ProjectSection"

// Head Export
export const Head = ({ data: { site } }) => {
  return (
    <title>Projects | {site.siteMetadata.author}</title>
  )
}

const Container = styled.div`
`

export default function Projects({ data }) {
  return (
    <Container>
      <PageHead title={"Projects"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras."} />
      <ProjectSection data={data.projects} />
    </Container>
  )
}

export const query = graphql`
  query {
    ...SiteMetadata
    ...ProjectQuery
  }
`