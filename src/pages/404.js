// All good sites need a clever/funny 404 page, Vader took the cake
// for mine

import React from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

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
const Button = styled.div`
  display: inline-block;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  padding: 0.6rem 0.7rem;
  margin-top: 2rem;
  box-shadow: ${props => props.theme.shadows.s1};

  transition: ${props => props.theme.anims.button};

  div {
    transition: ${props => props.theme.anims.button};
  }

  &:hover {
    background-color: ${props => props.theme.colors.res_button};
  }
  &:hover div {
    color: white;
  }
`

export default function Home({ data }) {
  return (
    <div>
      <Helmet>
        <title>404 | {data.site.siteMetadata.title}</title>
      </Helmet>
      <Container>
        <Text>
          <Title>404!</Title>
          <SubTitle>Sorry, looks like you're a bit lost.</SubTitle>
          <SubTitle>
            <Link to="/">
              <Button>Back to Home</Button>
            </Link>
          </SubTitle>
        </Text>
      </Container>
    </div>
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