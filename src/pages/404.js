import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../components/Layout"
import VaderImage from "../images/vader.png"

const Container = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  div {
    grid-row-start: 1;
    grid-column-start: 1;
  }
`
const Vader = styled.div`
  height: 40vh;
  background-image: url(${VaderImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  filter: blur(2px);
  opacity: 0.3;
  z-index: 1;
  transition: ${props => props.theme.anims.link};
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
  font-size: 4rem;
  font-weight: 700;
`
const SubTitle = styled.div`
  font-size: 3rem;
  font-weight: 500;
  font-style: italic;
`

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>404 | {data.site.siteMetadata.title}</title>
        </Helmet>
        <Vader></Vader>
        <Text>
          <Link to={"/"}>
            <Title>404 | Page not found</Title>
            <SubTitle>I find your lack of navigation disturbing.</SubTitle>
          </Link>
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
