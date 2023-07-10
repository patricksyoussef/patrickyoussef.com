import React from "react";
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  border-radius: 0.25rem;
  padding: 0.25rem;
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