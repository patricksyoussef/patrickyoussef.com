import { graphql } from 'gatsby'
import React from "react"
import styled from "styled-components"
import BlogSection from '../components/BlogSection'
import Divider from '../components/Divider'
import Hero from '../components/hero/Hero'

// Head Export
export const Head = ({ data: { site } }) => {
  return (
    <title>Home | {site.siteMetadata.author}</title>
  )
}

const Container = styled.div(({ theme }) => `
`)

const Index = ({ data }) => {
  return (
    <Container>
      <Hero data={data.hero} />
      <Divider title={"Projects"} link={"/projects/"} subtext={"All Projects"} />
      <Divider title={"Blog"} link={"/blog/"} subtext={"All Posts"} />
      <BlogSection data={data.blog} />
    </Container>
  )
}
export default Index

export const query = graphql`
query IndexQuery {
  ...SiteMetadata
  ...HeroQuery
  ...IndexProjectQuery
  ...IndexBlogQuery
}`