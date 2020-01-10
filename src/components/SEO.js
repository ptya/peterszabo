import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import favicon from 'assets/images/logo.ico'

// TODO create 404 site!

const SEO = ({ title, description, image, pathname, lang, meta }) => {
  const {
    site: {
      siteMetadata: {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        defaultImage,
      },
    },
  } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            defaultImage: image
          }
        }
      }
    `
  )

  const metaTitle = title || defaultTitle
  const metaImage = `${siteUrl}${image || defaultImage}`
  const metaUrl = `${siteUrl}${pathname || '/'}`
  const metaDescription = description || defaultDescription

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        <link rel="icon" type="image/x-icon" href={favicon} />,
      ].concat(meta)}
      link={[
        { rel: `icon`, type: `image/x-icon`, href: favicon },
        {
          rel: `stylesheet`,
          href: `https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css`,
        },
      ]}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  lang: 'hu',
  meta: [],
}

export default SEO
