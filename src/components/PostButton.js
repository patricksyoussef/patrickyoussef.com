// Fancy little button that links to my resume, hosted in Hero.js

import React from "react"
import styled from "styled-components"
import { HeaderButton } from "./HeaderButton"

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
`

export default ({ text, target }) => (
  <Container>
    <HeaderButton
      href = {target}
      target={"_blank"}
      text={text}
    ></HeaderButton>
  </Container>
)
