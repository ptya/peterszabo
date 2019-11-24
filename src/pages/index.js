import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Home from 'components/Home'

const Page = props => (
  <Layout bgEnabled {...props}>
    <SEO />
    <Home />
  </Layout>
)

export default Page
