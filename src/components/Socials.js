// Elements of my social icons and links, gets used in Footer.js
// Migrated to feather icons

import React from "react"
import styled from "styled-components"
import { GitHub, Send, Linkedin, Coffee} from 'react-feather';
// No longer using FontAwesome
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//import { library } from "@fortawesome/fontawesome-svg-core"
//import { fab } from "@fortawesome/free-brands-svg-icons"
//import { far } from "@fortawesome/free-regular-svg-icons"
//import { faEnvelope, faCoffee } from "@fortawesome/free-solid-svg-icons"
//library.add(fab, far, faEnvelope, faCoffee)

const Container = styled.div`
  margin-top: 1.5rem;  
  margin-bottom: 0rem;
  display: flex;
`
const SocialItem = styled.div`
  padding: 0rem 0rem;

  svg {
    font-size: 1.75rem;
    color: ${props => props.theme.colors.black};
    transition: ${props => props.theme.anims.main};
    position: relative;
    top: 0;

    &:hover {
      color: ${props => props.theme.colors.blue};
      top: 0rem;
    }
  }
`
const Padding = styled.div`
  padding: 0rem 0.75rem;
`

const Socials = () => (
  <Container>
    <SocialItem>
      <a
        href="https://www.linkedin.com/in/patricksyoussef/"
        target="_blank"
        rel="noreferrer">
        <Linkedin size={24}/>
      </a>
    </SocialItem>
    <Padding/>
    <SocialItem>
      <a
        href="https://github.com/patricksyoussef"
        target="_blank"
        rel="noreferrer">
        <GitHub size={24}/>
      </a>
    </SocialItem>
    <Padding/>
    <SocialItem>
      <a href="mailto:patricksyoussef@gmail.com">
        <Send size={24}/>
      </a>
    </SocialItem>
    <Padding/>
    <SocialItem>
      <a
        // href="https://www.buymeacoffee.com/patrickyoussef"
        href="https://account.venmo.com/u/PatrickYoussef"
        target="_blank"
        rel="noreferrer">
        <Coffee size={24}/>
      </a>
    </SocialItem>
  </Container>
)
export default Socials;