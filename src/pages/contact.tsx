import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Contact from 'components/Contact'

const Page: React.FC = () => (
  <Layout>
    <SEO title="Contact me" />
    <Contact />
  </Layout>
)

export default Page
