import { graphql } from 'gatsby'
import React from "react"
import styled from "styled-components"
import BlogSection from '../components/BlogSection'
import Divider from '../components/Divider'
import ProjectSection from '../components/ProjectSection'
import Hero from '../components/hero/Hero'

// Head Export
export const Head = ({ data: { site } }) => {
  return (
    <>
      <title>Home | {site.siteMetadata.author}</title>
      <description>{site.siteMetadata.description}</description>
      <link rel="canonical" href={site.siteMetadata.siteUrl} />
      <meta name="description" content={site.siteMetadata.description} />

      <meta property='og:url' content={'https://patrickyoussef.com'} />
      <meta property="og:type" content="website" />
      <meta property='og:title' content={site.siteMetadata.title} />
      <meta property='og:description' content={site.siteMetadata.description} />
      <meta property='og:image' content={'/images/memoji_laptop_crop.png'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="patrickyoussef.com" />
      <meta property="twitter:url" content={'patrickyoussef.com'} />
      <meta name="twitter:title" content={site.siteMetadata.title} />
      <meta name="twitter:description" content={site.siteMetadata.description} />
      <meta name="twitter:image" content={'/images/memoji_laptop_crop.png'} />
    </>
  )
}

const Container = styled.div(({ theme }) => `
`)

const Index = ({ data }) => {
  return (
    <Container>
      <Hero data={data.hero} />
      <Divider title={"Projects"} link={"/projects/"} subtext={"All Projects"} />
      <ProjectSection data={data.projects} />
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