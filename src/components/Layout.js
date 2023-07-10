import React from "react"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

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
          <Header />
          {children}
          <Footer />
        </ContentWidth>
      </LimitedWidth>
    </FullView>
  )
}
export default Layout;