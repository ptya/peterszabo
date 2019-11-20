import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Social from 'components/Social'

import Hero from 'components/styles/Hero'
import Footer from 'components/styles/Footer'

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
    <Footer>
      <h3>Where to find me</h3>
      <Social type="row" />
    </Footer>
  </Layout>
)
