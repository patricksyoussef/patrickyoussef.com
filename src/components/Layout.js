import React from "react"
import styled from "styled-components"

const FullView = styled.div`
  min-width: 10vw;
  min-height 100vh;
`

const ColorStrip = styled.div`
  height: 0.5rem;
  background-color: blue;
`

const Container = styled.div`
`

function Layout({ children }) {
  return (
    <FullView>
      <ColorStrip />
      {children}
    </FullView>
  )
}
export default Layout;