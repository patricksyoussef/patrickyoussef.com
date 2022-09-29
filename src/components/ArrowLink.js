import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import { ArrowRight } from 'react-feather';

const Container = styled.div`
  margin-top: 0.1rem;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text_gray};
  .arrow {
    margin-left: 0.2rem;
  }
`

const Text = styled.div`
  font-family: ${props => props.theme.fonts.sub};
  display: flex;
`

const ArrowLink = ({ link, text }) => (
    <Link to={link}>
      <Container>
        <Text>{text}</Text>
        <ArrowRight className="arrow" size={20}/>
      </Container>
    </Link>
  )
  export default ArrowLink;