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
            },
          },
          {
            resolve: `gatsby-remark-relative-links`,
            options: {
              domainRegex: /http[s]*:\/\/[www.]*yoursite\.com[/]?/,
            },
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "nofollow",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IBM Plex Sans`, `Open Sans`, `Inconsolata`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-lodash`,
    },
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-favicon`,
    `gatsby-plugin-catch-links`,
  ],
}
