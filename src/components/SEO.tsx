import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

import favicon from '@assets/images/logo.ico'

type Props = {
  title?: string
  description?: string
  image?: string
  pathname?: string
  lang?: string
}

const SEO: React.FC<Props> = ({
  title = undefined,
  description = undefined,
  image = undefined,
  pathname = undefined,
  lang = undefined,
}: Props) => {
  const {
    site: {
      siteMetadata: { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage },
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
      ]}
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

export default SEO
