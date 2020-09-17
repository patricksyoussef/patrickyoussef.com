module.exports = {
  plugins: [
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
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "a11y-dark",
              lineNumbers: false,
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
  ],
}
