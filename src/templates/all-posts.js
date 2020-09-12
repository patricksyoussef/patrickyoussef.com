import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: ${props => props.theme.colors.dark1};
`

export default function Home() {
  return (
    <div>
      <StyledH1>BLOG LANDING</StyledH1>
      <p>My name is Patrick</p>
      <p>slug</p>
    </div>
  )
}
