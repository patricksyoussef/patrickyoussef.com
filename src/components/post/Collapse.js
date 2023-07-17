import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'react-feather';
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  h1,h2,h3 {
    margin: 0rem;
    font-weight: 500;
  }

  background-color: ${theme.background_darken};
  border: 1px solid ${theme.colors.borders};;
  border-radius: ${theme.radii.feature};
  padding: 0.5rem 1rem;
  cursor: pointer;

  h1, h2, h3 {
    svg {
      display: none;
    }
  }
`)

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    margin-bottom: 0.0rem;
  }
`

const Children = styled.div`
  padding: 0.5rem 0rem;
  margin: 0rem 0rem;
`

const Collapse = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Container className='collapse' onClick={() => setIsActive(!isActive)}>
      <Content>
        <h3>{title}</h3>
        <div>{isActive ? <ChevronUp size={24} /> : <ChevronDown size={24} />}</div>
      </Content>
      {isActive && <Children>{children}</Children>}
    </Container>
  )
}
export default Collapse;