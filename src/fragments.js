import { graphql } from "gatsby";

export const postElements = graphql`
  fragment PostElements on Mdx {
    frontmatter {
      slug
      date(formatString: "MMMM Do, YYYY")
      title
      tags
      featureImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, transformOptions: {cropFocus: ATTENTION})
          original {
            src
          }
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
              gatsbyImageData(layout:FULL_WIDTH, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;

export const indexProjectFragment = graphql`
  fragment IndexProjectQuery on Query {
    project: allMdx(
      limit: 3
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
    project: allMdx(
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
    limit: 3
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