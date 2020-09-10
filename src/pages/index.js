import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  ${({ theme: { colors } }) => `
    color: ${colors.dark1};
  `}
`

export default function Home() {
  return (
    <div>
      <StyledH1>Patrick Youssef</StyledH1>
      <p>My name is Patrick</p>
    </div>
  )
}
