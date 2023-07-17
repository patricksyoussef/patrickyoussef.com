import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { ArrowUpRight } from "react-feather";
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  background-color: ${theme.colors.cards.background};
  border: 1px solid ${theme.colors.borders};
  border-radius: 0.75rem;
  transition: ${theme.transitions.main};
  overflow: hidden;

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: ${theme.shadow};
    .subtext, .tags {
      color: ${theme.colors.text.dark};
    } 
    .feature:after {
      opacity: 0.0;
    }
  }

  color: ${theme.colors.text.dark};
  p {
    margin: 0;
  }

  .title {
    color: ${theme.colors.text.dark};
    font-size: 1.25rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  .subtext {
    color: ${theme.colors.text.light};
    font-size: 1rem;
  }
  .excerpt {
    font-size: 1rem;
  }
`)

const Toolbar = styled.div(({ theme }) => `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: ${theme.colors.text.light};

  p {
    font-size: 1rem;
  }
`)

const Content = styled.div(({ theme }) => `
  padding: 0.75rem;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 0.25rem;
`)

const ImageContainer = styled.div(({ theme }) => `
  width: 100%;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
`)

const FeatureImage = styled.div(({ theme }) => `
  overflow: hidden;
  border-radius: 0.75rem;
  box-shadow: ${theme.shadow};

  .feature:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: transparent;
  }
  
  .feature:after {
    transition: ${theme.transitions.main};
    background: ${theme.colors.primary};
    opacity: 0.2;
  }
`)

const FeatureIcon = ({ pinned }) => {
  // return (pinned ? <Star size={20} strokeWidth={1.5} /> : <ArrowUpRight size={20} strokeWidth={1.5} />)
  return (<ArrowUpRight size={20} strokeWidth={1.5} />)
}

const ImageWrapper = ({ image, featureImg, frontmatter }) => {
  if (image) {
    return (
      <ImageContainer>
        <FeatureImage>
          <GatsbyImage className="feature" image={featureImg} alt={frontmatter.title} />
        </FeatureImage>
      </ImageContainer>
    )
  }
  return (<></>)
}


const ContentCard = ({ frontmatter, fields, _image = false }) => {
  // Determine whether to list the category of the tags for the card
  let cardTags = frontmatter.templateKey === "project" ? frontmatter.tags.sort().join(" · ") : frontmatter.category
  let featureImg = getImage(frontmatter.featureImage.childImageSharp.card)
  return (
    <Link to={fields.path}>
      <Container>
        <Content>
          <Toolbar>
            <p className="tags">{cardTags}</p>
            <FeatureIcon pinned={frontmatter.pinned} />
          </Toolbar>
          <p className="title">{frontmatter.title}</p>
          <p className="subtext">{frontmatter.date} · {fields.readingTime.text}</p>
        </Content>
        <ImageWrapper image={_image} featureImg={featureImg} frontmatter={frontmatter} />
      </Container>
    </Link >
  )
}
export default ContentCard;