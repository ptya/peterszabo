/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Web Development',
    titleTemplate: '%s · Peter Szabo · Web Developer',
    description:
      "Hello! My name is Péter Szabó and I create websites. Check out my site and let's talk.",
    siteUrl: 'https://peterszabo.io',
    image: '/images/logo_dark.png',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        createLinkInHead: true,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@src': path.join(__dirname, 'src'),
        '@pages': path.join(__dirname, `src`, `pages`),
        '@assets': path.join(__dirname, `src`, `assets`),
        '@components': path.join(__dirname, `src`, `components`),
        '@utils': path.join(__dirname, `src`, `utils`),
        '@types': path.join(__dirname, `src`, `types`),
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, `src`, `pages`),
        assets: path.join(__dirname, `src`, `assets`),
        components: path.join(__dirname, `src`, `components`),
        utils: path.join(__dirname, `src`, `utils`),
        types: path.join(__dirname, `src`, `types`),
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Peter Szabo · Web Developer',
        short_name: 'Peter Szabo',
        start_url: '/',
        background_color: '#0e1724',
        theme_color: '#0e1724',
        display: 'standalone',
        icon: 'src/assets/images/logo_dark.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
