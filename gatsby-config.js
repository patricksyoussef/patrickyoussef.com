// Just a bunch of imports
const _ = require("lodash")

module.exports = {
  siteMetadata: {
    title: `Patrick Youssef`,
    description: `Patrick Youssef. Coding blog and my home on the web. Currently a master's candidate at the University of California, San Diego. `,
    siteUrl: `https://www.patrickyoussef.com`,
    keywords: ["gatsby", "blog", "robotics", "python"],
    image: "./src/favicon.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-remark-reading-time`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
          policy: [{ userAgent: `*`, allow: `/` }],
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
        ],
        remarkPlugins: [
          require('remark-math'),
          require('remark-html-katex'),
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
    `gatsby-plugin-favicon`,
    `gatsby-plugin-catch-links`,
  ],
}
