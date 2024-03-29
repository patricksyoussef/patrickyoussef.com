import { graphql } from "gatsby";

export const postElements = graphql`
  fragment PostElements on Mdx {
    frontmatter {
      category
      excerpt
      slug
      date(formatString: "MMM. Do, YYYY")
      templateKey
      title
      tags
      pinned
      featureImage {
        childImageSharp {
          whole: gatsbyImageData(width: 750, placeholder: BLURRED, transformOptions: {cropFocus: ENTROPY})
          feature: gatsbyImageData(placeholder: BLURRED, aspectRatio: 5.0,  transformOptions: {cropFocus: ENTROPY})
          card: gatsbyImageData(width: 450, aspectRatio: 4.5, placeholder: BLURRED, transformOptions: {cropFocus: ENTROPY})
        }
      }
    }
    fields {
      path
      readingTime {
        text
      }
    }
  }
`;

export const siteMetadata = graphql`
  fragment SiteMetadata on Query {
    site {
      siteMetadata {
        author
        description
        siteUrl
      }
    }
  }
`;

export const heroFragment = graphql`
  fragment HeroQuery on Query {
    hero: allMdx(filter: {frontmatter: {templateKey: {eq: "hero"}}}) {
      nodes {
        body
        frontmatter {
          title
          featureImage {
            childImageSharp {
              gatsbyImageData(height: 300, aspectRatio: 1.0, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export const indexProjectFragment = graphql`
  fragment IndexProjectQuery on Query {
    projects: allMdx(
      limit: 2
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {published: {eq: true}, templateKey: {eq: "project"}, pinned: {eq: true}}}
    ) {
      nodes {
        ...PostElements
      }
    }
  }
`;

export const projectFragment = graphql`
  fragment ProjectQuery on Query {
    projects: allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {published: {eq: true}, templateKey: {eq: "project"}}}
    ) {
      nodes {
        ...PostElements
      }
    }
  }
`;

export const indexBlogFragment = graphql`
fragment IndexBlogQuery on Query {
  blog: allMdx(
    limit: 4
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {published: {eq: true}, templateKey: {eq: "blog"}, pinned: {eq: true}}}
  ) {
    nodes {
      ...PostElements
    }
  }
}
`;

export const blogFragment = graphql`
fragment BlogQuery on Query {
  blog: allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {published: {eq: true}, templateKey: {eq: "blog"}}}
  ) {
    nodes {
      ...PostElements
    }
  }
}
`;