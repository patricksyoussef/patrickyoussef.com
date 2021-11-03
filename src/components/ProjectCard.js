// All the styling for a listing card for a particular post, you'll find these
// in lists on the homepage and on "All Posts"

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

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

  &:hover .bg_img:after {
    background: transparent;
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

  * {
    width: 100%;
    height: 100%;
  }

  .bg_img:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    transition: ${props => props.theme.anims.project};
    background: rgba(24, 95, 184, 0.2);
  }
`

const Text = styled.div`
  border-top-style: solid;
  border-width: 1px;
  border-color: ${props => props.theme.colors.text_gray};
  padding: 0.5rem 0.75rem;

  h1,h2,h3,h4 {
    font-family: ${props => props.theme.fonts.main};
  }

  p {
    font-family: ${props => props.theme.fonts.sub};
  }

  h2,h3,h4,p {
    margin: 0;
  }

  p {
    color: ${props => props.theme.colors.text_gray};
  }
`


const ProjectCard = ({ frontmatter, fields }) => {
  let featureImg = getImage(frontmatter.featureImage.childImageSharp.gatsbyImageData)
  return (
    <Card>
      <StyledLink to={fields.path}>
        <Grid>
          <GridImage className={'grid_img'}>
            <GatsbyImage className={"bg_img"} image={featureImg}/>
          </GridImage>
          <Text>
            <h3>{frontmatter.title}</h3>
            <p>{frontmatter.date}</p>
          </Text>
        </Grid>
      </StyledLink>
    </Card>   
  )
}
export default ProjectCard;