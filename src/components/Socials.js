import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { fagithub } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Container = styled.div`
  margin-bottom: 0rem;
  display: flex;
`
const SocialItem = styled.div`
  padding: 0.5rem;

  .SocialItem {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.text_gray};
    transition: ${props => props.theme.anims.link};

    &:hover {
      color: ${props => props.theme.colors.text_dark};
    }
  }
`

export const Socials = () => (
  <Container>
    <SocialItem>
      <FontAwesomeIcon icon={fagithub} className="SocialItem" />
    </SocialItem>
    <SocialItem>
      <FontAwesomeIcon icon={fagithub} className="SocialItem" />
    </SocialItem>
    <SocialItem>
      <FontAwesomeIcon icon={fagithub} className="SocialItem" />
    </SocialItem>
  </Container>
)
