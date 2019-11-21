import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Work from 'components/Work'

const Page = props => (
  <Layout {...props}>
    <SEO title="My works" />
    <Work />
  </Layout>
)

export default Page
