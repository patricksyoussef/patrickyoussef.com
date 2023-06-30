module.exports = {
  siteMetadata: {
    title: `Patrick Youssef`,
    description: `I'm Patrick Youssef and this is my coding blog and home on the web.`,
    siteUrl: `https://www.patrickyoussef.com`,
    keywords: ["gatsby", "blog", "robotics", "python", "deep learning", "machine learning"],
    image: "./src/favicon.png",
  },
  plugins: [
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
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/RocketIcon.png`,
      },
    },
  ],
}
