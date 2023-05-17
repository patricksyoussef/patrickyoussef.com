// Handles if an image is passed or not and hands back a div with a
// background-image applied.

import React from "react"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from 'gbimage-bridge';

const FeatureImage = ({ frontmatter }) => {
  let image = getImage(frontmatter.featureImage.childImageSharp.gatsbyImageData)
  return (
    <BgImage image={image} alt={"Post Feature Image"}></BgImage>
  ) 
}
export default FeatureImage;