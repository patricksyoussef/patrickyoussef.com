// All the styling for a listing card for a particular post, you'll find these
// in lists on the homepage and on "All Posts"

import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { FeatureImage } from "./FeatureImage"

const Container = styled.div`
  height: 100%;

  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  box-shadow: ${props => props.theme.shadows.s1};
  margin-bottom: 1.75rem;

  > div {
    grid-row-start: 1;
    grid-column-start: 1;
  }
`

const FeatureImageContainer = styled.div`
  margin: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  opacity: 1.0;
  filter: blur(1px);
  height:100%;

  FeatureImage {
    background-color: black;
  }

  * {
    width: 100%;
    height: 100%;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
const Card = styled.div`
transition: ${props => props.theme.anims.project};
width: 100%;
height: 220px;

border-style: solid;
border-width: 1px;
border-radius: 0.5rem;
border-color: ${props => props.theme.colors.text_gray};
box-shadow: ${props => props.theme.shadows.s1};

overflow: hidden;

&:hover div {
  transition: ${props => props.theme.anims.project};
  filter: blur(0px);
}

&:hover .grid_img:after {
  background: rgba(255, 255, 255, 0.0);
}
`
const Grid = styled.div`
  display: grid;
  height: 100%;
  padding: 0.5rem;

  grid-template-rows: 2fr 1fr;
`

const Text = styled.div`
  padding:0.4rem;

  h2,h3,h4,p {
    margin: 0;
  }
  filter: blur(0px);

  * {
    height: min-content;
  }
`
const TextBox = styled.div`
  background-color: ${props => props.theme.colors.light1};;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 5px;
  border-color: ${props => props.theme.colors.blue};
  width:100%;
  padding: 0.15rem;
`

const Header = styled.div`
  min-height: 9rem;
  margin: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`


export const ProjectCard = ({ frontmatter, fields }) => {
  let featureImg = frontmatter.featureImage.childImageSharp.fluid
  return (
    <Card>
      <StyledLink to={fields.path}>
        <Container>
          <FeatureImageContainer>
            <BackgroundImage fluid={featureImg}></BackgroundImage>
          </FeatureImageContainer>
          <Header>
            <Grid>
              <div></div>
              <TextBox>
                <Text>
                  <div>
                    <h3>{frontmatter.title}</h3>
                    <p>{frontmatter.date}</p>
                  </div>
                </Text>
              </TextBox>
            </Grid>
          </Header>
        </Container>
      </StyledLink>
    </Card>   
  )
}
