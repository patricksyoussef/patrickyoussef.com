import { Link } from "gatsby"
import React from "react"
import { Underline } from "./Underline"

export const Header = ({ siteTitle }) => (
  <Underline>
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
  </Underline>
)
