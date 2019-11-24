import React from 'react'
import Social from 'components/Social'

import Hero from 'components/styles/Hero'
import Footer from 'components/styles/Footer'

const Home = () => (
  <>
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
  </>
)

export default Home
