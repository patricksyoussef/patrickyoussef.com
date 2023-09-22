import React from "react";
import styled from "styled-components";
import { copyToClipboard } from "../common/Utils";

const StyledLink = styled.a(({ theme }) => `
  text-decoration: none !important;
  color: ${theme.colors.text.dark} !important;
`)

const HeaderLink = ({ props }) => {
  let id = props.children.replaceAll(/[().,?!]/g, "").replaceAll(" ", "-").toLowerCase()
  return (
    <h1 id={id}>
      <StyledLink href={`#${id}`} onClick={() => { copyToClipboard(window.location.protocol + window.location.host + window.location.pathname + `#${id}`) }}>
        {props.children}
      </StyledLink>
    </h1>
  )
}
export default HeaderLink;