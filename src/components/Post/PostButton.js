// Fancy little button that links to my resume, hosted in Hero.js

import React from "react"
import styled from "styled-components"
import ResumeButton from "../Header/ResumeButton"

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  * {
    font-weight: 500;
  }
`

const PostButton = ({ text, target }) => (
  <Container>
    <ResumeButton
      href = {target}
      target={"_blank"}
      text={text}
    ></ResumeButton>
  </Container>
)
export default PostButton;