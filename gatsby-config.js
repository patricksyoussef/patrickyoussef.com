// Just a bunch of imports
const _ = require("lodash")

module.exports = {
  siteMetadata: {
    title: `Patrick Youssef`,
    siteUrl: `https://www.patrickyoussef.com`,
    description: `A landing page for all things Patrick`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-relative-links`,
            options: {
              domainRegex: /http[s]*:\/\/[www.]*patrickyoussef\.com[/]?/,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "IBM Plex Sans"
            },
            {
              family: "Open Sans"
            },
            {
              family: "Inconsolata"
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-catch-links`,
  ],
}
