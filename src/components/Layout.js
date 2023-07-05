import React from "react"
import styled from "styled-components"
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

  // General Font Override
  font-family: ${theme.fonts.main};
`)


function Layout({ children }) {
  return (
    <FullView>
      <ColorStrip />
      <LimitedWidth>
        <Header />
        {children}
      </LimitedWidth>
    </FullView>
  )
}
export default Layout;