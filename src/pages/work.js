import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Work from 'components/Work'

const Page = ({ data, ...props }) => (
  <Layout {...props}>
    <SEO title="My works" />
    <Work data={data} {...props} />
  </Layout>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const query = graphql`
  query MyWorks {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
            path
            images {
              childImageSharp {
                fluid(maxWidth: 650, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
