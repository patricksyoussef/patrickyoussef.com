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
  const postPerPage = 1
  const numPages = Math.ceil(result.data.allMdx.nodes.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/page${i + 1}/`,
      component: require.resolve("./src/templates/all-posts.js"),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
