import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"

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

const Text = styled.div`
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Title = styled.div`
  font-family: ${props => props.theme.fonts.code};
  font-size: 6rem;
  font-weight: 700;
`
const SubTitle = styled.div`
  font-family: ${props => props.theme.fonts.code};
  font-size: 2rem;
  font-weight: 500;
`

export default function Home({ data }) {
  return (
    <Layout>
      <Helmet>
        <title>404 | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <Text>
          <Title>404</Title>
          <SubTitle>Looks like you're a bit lost.</SubTitle>
        </Text>
      </Container>
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