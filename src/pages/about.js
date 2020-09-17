import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import { Helmet } from "react-helmet"

const StyledH1 = styled.h1`
  color: ${props => props.theme.colors.dark1};
`

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>About | {data.site.siteMetadata.title}</title>
      </Helmet>
      <StyledH1>This is my about page!</StyledH1>
      <p>My name is Patrick</p>
    </Layout>
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
