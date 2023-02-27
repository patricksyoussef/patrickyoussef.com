const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const readingTime = require('reading-time');
let wordsPerMinute = 150

// The following goes through all MDX files found (blog posts, about page, etc.)
// and creates a gatsby link using the slug denoted in each MDX's frontmatter
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx` && node.frontmatter.title.length > 0) {
    
    // Path
    const value = createFilePath({ node, getNode })
    const abs_path = `/${value.split("/", 2)[1]}/${node.frontmatter.slug}/`
    createNodeField({
      node,
      name: `path`,
      value: abs_path,
    })

    // Reading Time
    createNodeField({
      node,
      name: `readingTime`,
      value: readingTime(node.rawBody, {wordsPerMinute})
    })
  }
}

  // Populates graphql with the result of my requests that are used later to
// populate content on the blog posts
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      blog: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: {
            published: { eq: true }
            templateKey: { eq: "blog-post" }
          }
        }
      ) {
        nodes {
          frontmatter {
            slug
            tags
          }
          fields {
            path
          }
          wordCount {
            words
          }
        }
      }
      projects: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          frontmatter: {
            published: { eq: true }
            templateKey: { eq: "project" }
          }
        }
      ) {
        nodes {
          frontmatter {
            slug
          }
          fields {
            path
          }
        }
      }
    }
  `)

  // Resolve templates
  blog_post = path.resolve("./src/templates/blog_post.js")

  // Create blog posts
  for (const [key, arr] of Object.entries(result.data)) {
    arr['nodes'].forEach(post => {
      createPage({
        path: post.fields.path,
        component: blog_post,
        context: {
          post_id: post.fields.path,
        },
      })
    })
  }
}