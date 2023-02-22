// Simple underline style environment

import React, { useState } from 'react';
import styled from "styled-components"
import { ChevronDown, ChevronUp} from 'react-feather';

const Container = styled.div`
  max-width: ${props => props.theme.widths.max};

  h1,h2,h3 {
    margin: 0rem;
    font-weight: 500;
  }

  border-radius: ${props => props.theme.radii.heading};
  border-width: 1px;
  border-color: ${props => props.theme.colors.text_gray};
  border-style: solid;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.toc};

  h1, h2, h3 {
    svg {
      display: none;
    }
  }
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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
    <Container className='collapse'>
        <Content onClick={() => setIsActive(!isActive)}>
            <h3>{title}</h3>
            <div>{isActive ? <ChevronUp size={24}/> : <ChevronDown size={24}/>}</div>
        </Content>
        {isActive && <Children>{children}</Children>}
    </Container>
    )
  }
export default Collapse;