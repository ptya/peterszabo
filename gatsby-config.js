/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-files`,
        path: `${__dirname}/src/works`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`ResizeObserver`],
      },
    },
  ],
  siteMetadata: {
    title: 'Web Development',
    titleTemplate: '%s · Peter Szabo · Web Developer',
    description:
      "Hello! My name is Péter Szabó and I create websites. Check out my site and let's talk.",
    url: 'https://peterszabo.io',
    image: '/images/logo_dark.png',
  },
}
