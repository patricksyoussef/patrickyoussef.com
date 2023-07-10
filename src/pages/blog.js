import { graphql } from 'gatsby'
import React from "react"
import styled from "styled-components"
import BlogSection from '../components/BlogSection'
import PageHead from '../components/PageHead'

// Head Export
export const Head = ({ data: { site } }) => {
  return (
    <title>My Blog | {site.siteMetadata.author}</title>
  )
}


const Container = styled.div(({ theme }) => `
`)

export default function Blog({ data }) {
  return (
    <Container>
      <PageHead title="Blog" description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras."} />
      <BlogSection data={data.blog} />
    </Container>
  )
}

export const query = graphql`
  query BlogPageQuery {
    ...SiteMetadata
    ...BlogQuery
  }
`