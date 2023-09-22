import React from "react";
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  border-radius: 0.25em;
  padding: 0.25em;
`)

const Text = styled.div(({ theme }) => `
`)

const LabelBox = ({ backString, text }) => {

  return (
    <Container style={{ backgroundColor: backString }}>
      <Text>{text}</Text>
    </Container>
  )
}
export default LabelBox