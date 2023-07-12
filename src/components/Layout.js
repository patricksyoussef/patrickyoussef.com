import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

const GlobalStyles = createGlobalStyle(({ theme }) => `
  // Importing/Setting Font
  @font-face {
    font-family: "DM Sans";
    font-style: normal;
    font-display: swap;
    font-weight: 200 300 400 500 700;
    src: url("/fonts/DMSansVar.ttf");
  }
  @font-face {
    font-family: "Fira Code";
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src: url("/fonts/FiraCode-Regular.ttf");
  }

  // Global Style
  html {
    scroll-behavior: smooth;
    font-size: 15px;
  }

  // Media Queries
  @media (max-width: 800px) {
    html { font-size: 14px; }
  }
  @media (max-width: 600px) {
    html { font-size: 14px; }
  }
  @media (max-width: 450px) {
    html { font-size: 13px; }
  }
  @media (max-width: 370px) {
    html { font-size: 11px; }
  }

  // Setting Background
  body {
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.main};
  }

  // Font Styles
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4 {
    font-weight: 500;
  }
  h1 {
    font-size: 1.75rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1rem;
  }
  p, li, td, tr, .katex {
    font-size: 1.2rem;
  }
`)

const FullView = styled.div`
  width: 100%;
  min-height 100vh;
`

const ColorStrip = styled.div(({ theme }) => `
  height: 0.5rem;
  background-color: ${theme.colors.primary};
`)

const LimitedWidth = styled.div(({ theme }) => `
  max-width: ${theme.widths.max};
  margin: 0 auto;
  padding: 0rem 1rem;
`)

const ContentWidth = styled.div(({ theme }) => `
  max-width: ${theme.widths.content};
  margin: 0 auto;
`)


function Layout({ children }) {
  return (
    <FullView>
      <ColorStrip />
      <LimitedWidth>
        <ContentWidth>
          <GlobalStyles />
          <Header />
          {children}
          <Footer />
        </ContentWidth>
      </LimitedWidth>
    </FullView>
  )
}
export default Layout;