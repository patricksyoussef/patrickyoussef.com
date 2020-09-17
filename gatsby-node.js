const path = require(`path`)
const _ = require("lodash")
const { createFilePath } = require(`gatsby-source-filesystem`)

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
            templateKey: { eq: "project-post" }
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

  // Split result to use in for loop
  const tmp = _.toPairs(result.data) // [['blogs', arr], ['project', arr]]

  const PostsPerPage = 2

  // Resolve templates
  blog_post = path.resolve("./src/templates/blog-post.js")
  blog_list = path.resolve("./src/templates/blog-list.js")
  project_post = path.resolve("./src/templates/project-post.js")
  project_list = path.resolve("./src/templates/project-list.js")

  tmp.forEach(([key, arr]) => {
    // Creates Single pages
    arr.nodes.forEach(post => {
      createPage({
        path: post.fields.path,
        component: key === "blog" ? blog_post : project_post,
        context: {
          slug: post.fields.path,
        },
      })
    })

    const NumPages = Math.ceil(arr.nodes.length / PostsPerPage)
    _.chunk(arr.nodes, PostsPerPage).forEach((posts, i) => {
      createPage({
        path: i === 0 ? `/${key}/` : `/${key}/page${i + 1}/`,
        component: key === "blog" ? blog_list : project_list,
        context: {
          skip: i * PostsPerPage,
          limit: PostsPerPage,
          num_pages: NumPages,
          current_page: i + 1,
        },
      })
    })
  })
}
