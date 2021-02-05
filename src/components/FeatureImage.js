// Handles if an image is passed or not and hands back a div with a
// background-image applied. If no image is passed, a default blue
// is applied.

import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const NoImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.blue};
  opacity: 0.5;
`

export const FeatureImage = ({ frontmatter }) => {
  try {
    let featureImg = frontmatter.featureImage.childImageSharp.fluid
    return <BackgroundImage fluid={featureImg}></BackgroundImage>
  } catch (err) {
    return <NoImage></NoImage>
  }
}
