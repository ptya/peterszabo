import React from 'react'
import { graphql } from 'gatsby'
import { FluidObject } from 'gatsby-image'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import About from 'components/About'

type PageProps = {
  data: {
    imageOne: {
      childImageSharp: {
        fluid: FluidObject
      },
    },
  },
}

const Page: React.FC<PageProps> = ({ data }) => (
  <Layout>
    <SEO title="About me" />
    <About data={data} />
  </Layout >
)

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Page
