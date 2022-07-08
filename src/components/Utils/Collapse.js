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
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

const Collapse = ({ title, children }) => {
    const [isActive, setIsActive] = useState(false);
    return (
    <Container>
        <Content onClick={() => setIsActive(!isActive)}>
            <h3>{title}</h3>
            <div>{isActive ? <ChevronUp size={24}/> : <ChevronDown size={24}/>}</div>
        </Content>
        {isActive && <div>{children}</div>}
    </Container>
    )
  }
export default Collapse;