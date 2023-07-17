import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import React from "react";
import styled from "styled-components";

let blur = 3;

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
  margin: ${`-${blur}px`};
  filter: blur(${`${blur}px`});
  opacity: 0.2;
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