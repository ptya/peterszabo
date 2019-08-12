import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'

import Hero from 'components/styles/Hero'

export default props => (
  <Layout bgEnabled {...props}>
    <SEO />
    <Hero>
      <h1>
        Hello,
        <br /> I’m Péter Szabó,
        <br /> I create websites.
      </h1>
      <h2>Front End Developer / React / Gatsby</h2>
    </Hero>
  </Layout>
)
