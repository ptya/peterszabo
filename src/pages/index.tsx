import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Home from 'components/Home'

const Page: React.FC = () => (
  <Layout>
    <SEO title="I create websites" />
    <Home />
  </Layout>
)

export default Page
