import React from "react"
import styled from "styled-components"
import { Layout } from "../components/Layout"

const StyledH1 = styled.h1`
  color: ${props => props.theme.colors.dark1};
`

export default function Home() {
  return (
    <Layout>
      <StyledH1>This is my about page!</StyledH1>
      <p>My name is Patrick</p>
    </Layout>
  )
}
