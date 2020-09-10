const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(
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
        }
      }
    }
  `)

  const posts = result.data.allMdx.nodes
  posts.forEach(post => {
    createPage({
      path: post.frontmatter.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })

  // Blog Pagination
  const postPerPage = 6
  const numPages = Math.ceil(result.data.allMdx.nodes.length / postPerPage)
}
