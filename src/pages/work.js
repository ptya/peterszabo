import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Work from 'components/Work'

const Page = ({ data, ...props }) => (
  <Layout {...props}>
    <SEO title="My works" />
    <Work data={data} />
  </Layout>
)

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
          }
        }
      }
    }
  }
`
