import React from "react"
import styled from "styled-components"
import { Layout } from "../components/Layout"

const StyledH1 = styled.h1`
  color: ${props => props.theme.colors.dark1};
  font-family: ${props => props.theme.fonts.main};
`
const StyledP = styled.p`
  color: ${props => props.theme.colors.dark1};
  font-family: ${props => props.theme.fonts.main};
`
const Code = styled.p`
  color: ${props => props.theme.colors.dark1};
  font-family: ${props => props.theme.fonts.code};
`

export default function Home() {
  return (
    <Layout>
      <StyledH1>This is for titles!</StyledH1>
      <StyledP>This is for content!</StyledP>
      <Code>This is for code!</Code>
    </Layout>
  )
}
