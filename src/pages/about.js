import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import About from 'components/About'

const Page = ({ data, ...props }) => (
  <Layout {...props}>
    <SEO title="About me" />
    <About data={data} />
  </Layout>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Page
