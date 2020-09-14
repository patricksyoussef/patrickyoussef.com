const path = require(`path`)
import _ from "lodash"

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions


  const { data } = await graphql(`
    query {
      blogs: allMdx(
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
      projects: allMdx(
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
        }
      }
    }
  `)


const tmp = _.toPairs(data) // [["blogs", [blogs]]...]


tmp.forEach(([key, arr])=>{
    // Creates Single pages
    arr.forEach(x=>{
        createPage({
            path: slug,
            component: key === "blog" ? '' : '',
            context: {
                slug
            }
        })
    })

    _.chunk(arr, 4).forEach((x,index)=>{
        createPage({
            path: `${key}`,
            component: key === "" ? "" : "",
            context: {
                slugs: x.map((y, i)=>y.slug) //["slug1", "slug2"]
            }

        })
    })
})
