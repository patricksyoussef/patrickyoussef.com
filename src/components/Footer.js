import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: gray;
  margin-top: auto;
`
const Content = styled.div`
  margin: 0.5rem;
`

export const Footer = () => (
  <Container>
    <Content>
      A work by{" "}
      <a href="https://github.com/patricksyoussef">
        <b>Patrick Youssef</b>
      </a>
    </Content>
  </Container>
)
