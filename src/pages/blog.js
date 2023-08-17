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
  let description = "From time to time, I share insights, experiences, and exposure to interesting topics. Topics range from long-form tutorials on modern topics to short musings from my life."
  return (
    <Container>
      <PageHead title="Blog" description={description} />
      <BlogSection data={data.blog} _years={false} />
    </Container>
  )
}

export const query = graphql`
  query BlogPageQuery {
    ...SiteMetadata
    ...BlogQuery
  }
`