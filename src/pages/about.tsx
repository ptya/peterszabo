import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import About from 'components/About'

import { ImageDataLike } from 'gatsby-plugin-image'

type PageProps = {
  data: {
    imageOne: ImageDataLike
  }
}

const Page = ({ data }: PageProps): JSX.Element => {
  return (
    <Layout>
      <SEO title="About me" />
      <About data={data} />
    </Layout>
  )
}

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 300)
      }
    }
  }
`

export default Page
