// Just organizes my social buttons, most of the work is in socials.js

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.und};
`
const Content = styled.div`
  display: flex;
  p {
    font-size: 1.1rem !important;
  }
`

const Footer = () => {
  return(
    <Container>
      <Content>
        <p>Designed and Built With Love by Patrick Youssef</p>
      </Content>
  </Container>
  )
}
export default Footer;