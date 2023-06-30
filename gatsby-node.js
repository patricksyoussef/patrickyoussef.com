const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const readingTime = require('reading-time');
let wordsPerMinute = 150

// The following goes through all MDX files found (blog posts, projects, etc.)
// and creates a gatsby link using the slug denoted in each MDX's frontmatter
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  // Determine if node is valid for page
  const validKeys = new Set(["blog", "project"])
  if (node.internal.type === `Mdx` && validKeys.has(node.frontmatter.templateKey)) {

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
      value: readingTime(node.rawBody, { wordsPerMinute })
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
            templateKey: { eq: "blog" }
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

  // Resolve template
  post_template = path.resolve("./src/templates/Post.js")

  // Create blog posts
  for (const [key, arr] of Object.entries(result.data)) {
    arr['nodes'].forEach(post => {
      createPage({
        path: post.fields.path,
        component: post_template,
        context: {
          post_id: post.fields.path,
        },
      })
    })
  }
}