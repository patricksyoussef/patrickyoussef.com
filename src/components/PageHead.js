import React from "react";
import styled from "styled-components";
import AccentText from "./common/AccentText";

const Container = styled.div(({ theme }) => `
  h1 {
    font-size: 5rem;
    font-weight: 200;
    line-height: 1;
  }

  margin: 1em 0em;
`)

const PageHead = ({ title, description }) => {
  return (
    <Container>
      <AccentText>
        <h1>{title}<span>.</span></h1>
      </AccentText>
      <p>{description}</p>
    </Container>
  )
}
export default PageHead;