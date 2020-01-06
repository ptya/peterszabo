import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql, useStaticQuery } from 'gatsby'

import favicon from 'assets/images/logo.ico'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`

// const SEO = ({ title, description, image, pathname, article }) => (
//   <StaticQuery
//     query={query}
//     render={({
//       site: {
//         siteMetadata: {
//           defaultTitle,
//           titleTemplate,
//           defaultDescription,
//           siteUrl,
//           defaultImage,
//         },
//       },
//     }) => {
//       const seo = {
//         title: title || defaultTitle,
//         description: description || defaultDescription,
//         image: `${siteUrl}${image || defaultImage}`,
//         url: `${siteUrl}${pathname || '/'}`,
//       }
//       return (
//         <>
//           <Helmet title={seo.title} titleTemplate={titleTemplate}>
//             <link rel="icon" type="image/x-icon" href={favicon} />
//             <meta name="description" content={seo.description} />
//             <meta name="image" content={seo.image} />
//             {seo.url && <meta property="og:url" content={seo.url} />}
//             {(article ? true : null) && (
//               <meta property="og:type" content="article" />
//             )}
//             {seo.title && <meta property="og:title" content={seo.title} />}
//             {seo.description && (
//               <meta property="og:description" content={seo.description} />
//             )}
//             {seo.image && <meta property="og:image" content={seo.image} />}
//             <link
//               href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.4.1/mapbox-gl.css"
//               rel="stylesheet"
//             />
//           </Helmet>
//         </>
//       )
//     }}
//   />
// )

const SEO = ({ title, description, image, pathname, article, lang, meta }) => {
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
            siteUrl: url
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
      titleTemplate={`%s | ${titleTemplate}`}
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
      ].concat(meta)}
    />
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
  lang: 'hu',
  meta: [],
}

export default SEO
