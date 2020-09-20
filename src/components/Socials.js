import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
library.add(fab, faEnvelope)

const Container = styled.div`
  margin-bottom: 0rem;
  display: flex;
`
const SocialItem = styled.div`
  padding: 0.5rem 1rem;

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
      <a href="mailto:patricksyoussef@gmail.com">
        <FontAwesomeIcon icon={["fas", "envelope"]} className="SocialItem" />
      </a>
    </SocialItem>
    <SocialItem>
      <a href="https://www.linkedin.com/in/patricksyoussef/" target="_blank">
        <FontAwesomeIcon icon={["fab", "linkedin"]} className="SocialItem" />
      </a>
    </SocialItem>
    <SocialItem>
      <a href="https://github.com/patricksyoussef" target="_blank">
        <FontAwesomeIcon icon={["fab", "github"]} className="SocialItem" />
      </a>
    </SocialItem>
  </Container>
)
