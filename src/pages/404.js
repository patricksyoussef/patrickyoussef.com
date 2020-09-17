import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { Layout } from "../components/Layout"
import VaderImage from "../images/vader.png"

const Container = styled.div`
  margin: 4rem 1rem;
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`
const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.code};
  color: ${props => props.theme.colors.dark1};
`
const SubTitle = styled.div`
  font-size: 2rem;
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.colors.dark1};
`
const Image = styled.img`
  box-shadow: none;
  width: 50%;
  border-radius: 10%;
`
const ButtonWrapper = styled.div`
  font-size: 2rem;
  margin: 1rem;
  padding 0.5rem;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  border-radius: 0.4rem;
  background-color: #cc0000;
`

export default function Home({ data }) {
  return (
    <Layout>
      <Container>
        <Helmet>
          <title>404 | {data.site.siteMetadata.title}</title>
        </Helmet>
        <Content>
          <Image src={VaderImage}></Image>
          <div>
            <Title>Error: 404</Title>
            <SubTitle>I find your lack of navigation disturbing.</SubTitle>
          </div>
          <Link to="/">
            <ButtonWrapper>Go Back</ButtonWrapper>
          </Link>
        </Content>
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
