// Simple underline style environment

import React, { useState } from 'react';
import styled from "styled-components"
import { ChevronDown, ChevronUp} from 'react-feather';

const Container = styled.div`
  max-width: ${props => props.theme.widths.max};

  h1,h2,h3 {
    margin: 0.2rem 0;
    font-family: ${props => props.theme.fonts.main};
  }

  border-radius: 15px;
  border-width: 1px;
  border-color: ${props => props.theme.colors.text_gray};
  border-style: solid;
  padding: 0.25rem 0.75rem;
  background-color: ${props => props.theme.colors.toc};
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const Children = styled.div`
  margin: -0.5rem 0rem;
`

const Collapse = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);
    return (
    <Container>
        <Content onClick={() => setIsActive(!isActive)}>
            <h3>{title}</h3>
            <div>{isActive ? <ChevronUp size={24}/> : <ChevronDown size={24}/>}</div>
        </Content>
        {isActive && <Children>{children}</Children>}
    </Container>
    )
  }
export default Collapse;