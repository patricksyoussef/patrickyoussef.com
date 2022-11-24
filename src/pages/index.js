import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import ProjectSection from "../components/ProjectSection"
import BlogSection from "../components/BlogSection"
import Divider from "../components/Divider"

const index = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title}</title>
        <description>{data.site.siteMetadata.description}</description>
        <link rel="canonical" href={data.site.siteMetadata.siteUrl}/>
        <meta name="description" content={data.site.siteMetadata.description}/>

        <meta property='og:url' content={ 'patrickyoussef.com' }/>
        <meta property="og:type" content="website"/>
        <meta property='og:title' content={ data.site.siteMetadata.title } />
        <meta property='og:description' content={ data.site.siteMetadata.description } />
        <meta property='og:image' content={ '/images/memoji_laptop_crop.png' } />

        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="patrickyoussef.com"/>
        <meta property="twitter:url" content={ 'patrickyoussef.com' }/>
        <meta name="twitter:title" content={ data.site.siteMetadata.title  }/>
        <meta name="twitter:description" content={ data.site.siteMetadata.description }/>
        <meta name="twitter:image" content={ '/images/memoji_laptop_crop.png' }/>
      </Helmet>
      <Hero data={data.hero}/>
      <Divider title={"Some Of My Favorite Work"} link="/projects/"/>
      <ProjectSection data={data.project}/>
      <Divider title={"Learn Something New Today"} link="/blog/"/>
      <BlogSection data={data.blog}/>
    </Layout>
  )
}
export default index;

export const query = graphql`
  query {
    hero: allMdx(
      filter: {
        frontmatter: {
          templateKey: { eq: "hero-text" }
        }
      }
    ) {
      nodes {
        frontmatter {
          title
          featureImage {
            childImageSharp {
              gatsbyImageData(width:400, formats: PNG, layout:FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
        body
      }
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
    
    project: allMdx(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "project" }
          pinned: {eq: true}
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          title
          tags
          featureImage {
            childImageSharp {
              gatsbyImageData(width:400, formats: JPG, placeholder: BLURRED)
            }
          }
        }
        fields {
          path
        }
      }
    }
    
    blog: allMdx(
      limit: 4
      sort: { fields: frontmatter___date, order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          templateKey: { eq: "blog-post"}
          pinned: {eq: true}
        }
      }
    ) {
      nodes {
        frontmatter {
          slug
          date(formatString: "MMMM Do, YYYY")
          title
        }
        fields {
          path
          readingTime {
            text
          }
        }
      }
    }
  }
`