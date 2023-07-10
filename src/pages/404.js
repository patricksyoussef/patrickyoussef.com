import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

// Head Export
export const Head = ({ data: { site } }) => {
  return (
    <title>404 | {site.siteMetadata.author}</title>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height:40vh;
`

const Text = styled.div`
`

export default function Home({ data }) {
  return (
    <Container>
      <Text>
        <h1>404 | Page Not Found</h1>
      </Text>
    </Container>
  )
}

export const query = graphql`
  query {
    ...SiteMetadata
  }
`