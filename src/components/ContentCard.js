import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { ArrowUpRight } from "react-feather";
import styled from "styled-components";

const Container = styled.div(({ theme }) => `
  padding: 0.75rem;
  background-color: ${theme.colors.cards.background};
  border: 1px solid ${theme.colors.borders};
  border-radius: ${theme.radii.content};
  transition: ${theme.transitions.main};
  overflow: hidden;

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
  display: grid;
  grid-template-rows: 1fr auto;
  grid-gap: 0.25rem;
`)

const ImageContainer = styled.div(({ theme }) => `
  margin-top: 0.75rem;
  width: 100%;
  left: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
`)

const FeatureImage = styled.div(({ theme }) => `
  width: calc(100%);
  border-top-left-radius: ${theme.radii.content};
  border-top-right-radius: ${theme.radii.content};
  box-shadow: ${theme.shadow};
  overflow: hidden;

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
  let featureImg = getImage(frontmatter.featureImage.childImageSharp.card)
  return (
    <Link to={fields.path}>
      <Container style={{ paddingBottom: _image ? "0rem" : "0.75rem" }}>
        <Toolbar>
          <p className="tags">{frontmatter.tags.sort().join(" · ")}</p>
          <FeatureIcon pinned={frontmatter.pinned} />
        </Toolbar>
        <Content>
          <p className="title">{frontmatter.title}</p>
          <p className="subtext">{frontmatter.date} · {fields.readingTime.text}</p>
        </Content>
        <ImageWrapper image={_image} featureImg={featureImg} frontmatter={frontmatter} />
      </Container>
    </Link >
  )
}
export default ContentCard;