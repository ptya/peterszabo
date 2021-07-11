import React from 'react'
import { graphql } from 'gatsby'

// types
import { TAllMarkdownRemark, TLocation } from 'types'

// components
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Work from 'components/Work'

type PageProps = {
  data: TAllMarkdownRemark
  location: TLocation
}

const Page: React.FC<PageProps> = ({ data, location }) => (
  <Layout>
    <SEO title="What I can do" />
    <Work data={data} location={location} />
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
            images {
              childImageSharp {
                gatsbyImageData(width: 650, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`
