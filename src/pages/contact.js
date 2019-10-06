import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Contact from 'components/Contact'

export default props => (
  <Layout {...props}>
    <SEO title="Contact me" />
    <Contact />
  </Layout>
)
