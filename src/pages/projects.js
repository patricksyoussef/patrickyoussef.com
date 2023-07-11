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
  let description = "In my free time, I like to build things. Not always to solve a big problem, but often just for the sake of spending a weekend learning and enjoying the process of creating something."
  return (
    <Container>
      <PageHead title={"Projects"} description={description} />
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