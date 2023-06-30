// Template for a blog post, mostly just styling and pulling graphql data
// for a particular blog given the "context" info given in gatsby-node.js

import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"

const Container = styled.div`
`

const Content = styled.div`
`

const BlogPost = ({ data }) => {
  const { frontmatter, fields, body, tableOfContents } = data.mdx

  // This is obnoxiously long to put below
  return (
    <Layout>
      <Container>
      </Container>
    </Layout>
  )
}
export default BlogPost

