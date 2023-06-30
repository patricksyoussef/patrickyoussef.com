import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: 4rem 0;

  div {
    grid-row-start: 1;
    grid-column-start: 1;
  }
`

export default function Home({ data }) {
  return (
    <Container>
      <h1>404</h1>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`