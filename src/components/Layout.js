import React from "react"
import styled from "styled-components"

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


function Layout({ children }) {
  return (
    <FullView>
      <ColorStrip />
      <LimitedWidth>{children}</LimitedWidth>
    </FullView>
  )
}
export default Layout;