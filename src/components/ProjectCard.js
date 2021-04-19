// All the styling for a listing card for a particular post, you'll find these
// in lists on the homepage and on "All Posts"

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledLink = styled(Link)`
  text-decoration: none;
`
const Card = styled.div`

* {
  transition: ${props => props.theme.anims.project};
}

width: 100%;
height: 220px;

border-style: solid;
border-width: 1px;
border-radius: 0.5rem;
border-color: ${props => props.theme.colors.text_gray};
box-shadow: ${props => props.theme.shadows.s1};

overflow: hidden;

&:hover div {
  filter: blur(0px);
}

&:hover p {
  color: black;
}
`
const Grid = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 2.5fr 1fr;
`
const GridImage = styled.div`
  margin: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 0.8;
  filter: blur(1px);

  FeatureImage {
    background-color: black;
  }

  * {
    width: 100%;
    height: 100%;
  }
`

const Text = styled.div`
border-top-style: solid;
border-width: 1px;
border-color: ${props => props.theme.colors.text_gray};
padding: 0.5rem 0.75rem;


h2,h3,h4,p {
  margin: 0;
}

p {
  
  color: ${props => props.theme.colors.text_gray};
}
`


export const ProjectCard = ({ frontmatter, fields }) => {
  let featureImg = frontmatter.featureImage.childImageSharp.fluid
  return (
    <Card>
      <StyledLink to={fields.path}>
        <Grid>
          <GridImage className='grid_img'>
            <BackgroundImage fluid={featureImg}></BackgroundImage>
          </GridImage>
          <Text>
            <div>
              <h3>{frontmatter.title}</h3>
              <p>{frontmatter.date}</p>
            </div>
          </Text>
        </Grid>
      </StyledLink>
    </Card>   
  )
}
