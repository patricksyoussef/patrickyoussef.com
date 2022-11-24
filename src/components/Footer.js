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
  padding-bottom: 0.75rem;
`
const Content = styled.div`
  display: flex;
  font-family: ${props => props.theme.fonts.sub};
`

const Footer = () => {
  // const today = new Date();
  // const year = today.getFullYear();
  return(
    <Container>
      <Content>
        <p>Designed and Built by Patrick Youssef</p>
      </Content>
  </Container>
  )
}
export default Footer;