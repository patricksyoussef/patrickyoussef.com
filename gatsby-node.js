const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

// The following goes through all MDX files found (blog posts, about page, etc.)
// and creates a gatsby link using the slug denoted in each MDX's frontmatter
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    const abs_path = `/${value.split("/", 2)[1]}/${node.frontmatter.slug}/`
    createNodeField({
      name: `path`,
      node,
      value: abs_path,
    })
  }
}


// Populates graphql with the result of my requests that are used later to
// populate content on the blog posts
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const tags = await graphql(`
  query MyQuery {
    tags: allMdx(filter: {frontmatter: {published: {eq: true}, templateKey: {eq: "blog-post"}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }  
`)
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

  // The following associates each of the blog MDX nodes with their respective
  // template and splits into groups based on how many posts would be one each
  // page of an "All Posts" category
  
  // Split result to use in for loop
  const tmp = _.toPairs(result.data) // [['blogs', arr], ['project', arr]]

  // Resolve templates
  blog_post = path.resolve("./src/templates/blog_post.js")
  // blog_list = path.resolve("./src/templates/bloglist_template.js")

  // For each MDX apply the template and the context for the template
  // to know how to retrieve data out of graphql
  tmp.forEach(([key, arr]) => {
    // Creates Single pages
    arr.nodes.forEach(post => {
      createPage({
        path: post.fields.path,
        component: key === "blog" ? blog_post : blog_post,
        context: {
          post_id: post.fields.path,
        },
      })
    })
  })
}
