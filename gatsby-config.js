module.exports = {
  siteMetadata: {
    title: `PatrickYoussef.com`,
    description: `I'm Patrick Youssef and this is my portfolio, blog, and home on the web.`,
    siteUrl: `https://www.patrickyoussef.com`,
    keywords: ["gatsby", "blog", "robotics", "python", "deep learning", "machine learning"],
    image: "./src/images/RocketIcon.png",
    author: `Patrick Youssef`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: f => `files/${f.name}`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              showCaptions: true,
              quality: 75,
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: "_blank",
              rel: "nofollow",
            }
          },
        ],
        remarkPlugins: [require("remark-math")],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrick Youssef`,
        short_name: `PY`,
        start_url: `/`,
        background_color: `#fafafa`,
        display: `minimal-ui`,
        icon: `src/images/RocketIcon.png`,
      },
    },
  ],
}
