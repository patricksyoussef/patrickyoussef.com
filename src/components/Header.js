import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"
import styled from "styled-components"

const ColorText = styled.span`
  color: blue;
`

export const Header = ({ siteTitle }) => (
  <Underline>
    <Link to="/">
      <h1>
        Patrick<ColorText>.</ColorText>
      </h1>
    </Link>
  </Underline>
)
