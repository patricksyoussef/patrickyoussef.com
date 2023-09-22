import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  background-color: ${theme.background_darken};
  border: 1px solid ${theme.colors.borders};;
  border-radius: ${theme.radii.feature};
  padding: 0.5rem 1rem;
`)

const Toolbar = styled.div`
  h1,h2,h3 {
    margin: 0rem;
    font-weight: 500;
  }
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin-bottom: 0.0rem;
  }
`

const Content = styled.div`
  margin: -0.5em 0em;
`

const Collapse = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container className='collapse'>
      <Toolbar onClick={() => setIsActive(!isActive)}>
        <h3>{title}</h3>
        <div>{isActive ? <ChevronUp size={24} /> : <ChevronDown size={24} />}</div>
      </Toolbar>
      {isActive && <Content>{children}</Content>}
    </Container>
  )
}
export default Collapse;