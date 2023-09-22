import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import React from "react";
import styled from "styled-components";

let blur = 5;

const Container = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  div[class^='gbi'] {
    width: 100%;
    height: 100%;
  }
  
  // Blur Style
  // Margin needed to fix rolloff
  margin: ${`-${blur}px`};
  filter: opacity(30%) blur(${`${blur}px`});;
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