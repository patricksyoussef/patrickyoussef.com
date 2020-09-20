import React from "react"
import styled from "styled-components"
import { Socials } from "./Socials"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.und};
  margin-top: 2rem;
`
const Content = styled.div`
  display: flex;
  margin: 0.5rem;
`

export const Footer = () => (
  <Container>
    <Content>
      <Socials />
    </Content>
  </Container>
)
