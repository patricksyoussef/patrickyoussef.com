import React from "react"
import styled from "styled-components"

const Container = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: center;
`)

const Content = styled.p(({ theme }) => `
  font-size: 1rem;
`)

const Footer = () => {
  return (
    <Container>
      <Content>Designed and Built by Patrick Youssef</Content>
    </Container>
  )
}
export default Footer;