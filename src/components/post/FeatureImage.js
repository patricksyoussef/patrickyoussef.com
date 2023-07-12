import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import React from "react";
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  div[class^='gbi'] {
    width: 120%;
    height: 120%;
  }
  
  // Blur Style
  // Margin needed to fix rolloff
  margin: -5px;
  filter: blur(3px);
  opacity: 0.25;
`)

const FeatureImage = ({ frontmatter }) => {
  let image = getImage(frontmatter.featureImage.childImageSharp.card)
  return (
    <Container>
      <BgImage image={image} alt={"Post Feature Image"}></BgImage>
    </Container>
  )
}
export default FeatureImage;