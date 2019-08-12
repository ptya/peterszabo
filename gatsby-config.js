/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, `src`, `pages`),
        assets: path.join(__dirname, `src`, `assets`),
        components: path.join(__dirname, `src`, `components`),
        utils: path.join(__dirname, `src`, `utils`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
  ],
  siteMetadata: {
    title: 'Peter Szabo',
    titleTemplate: '%s · Web Development',
    description: 'Peter Szabo, Web Developer',
    url: 'https://www.doe.com', // TODO:
    image: '/images/favicon.ico', // TODO:
  },
}
