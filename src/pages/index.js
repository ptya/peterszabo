import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Home from 'components/Home'

const Page = props => (
  <Layout bgEnabled {...props}>
    <SEO title="I create websites" />
    <Home />
  </Layout>
)

export default Page
