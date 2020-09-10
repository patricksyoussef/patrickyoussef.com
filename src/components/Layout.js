import React from "react"
import { Header } from "./Header"

export const Layout = ({ children }) => {
  return (
    <div>
      <Header siteTitle="Hello" siteDescription="This is a test!" />
      {children}
    </div>
  )
}
