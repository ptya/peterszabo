import React from 'react'
import Social from 'components/elements/Social'

import HomeBackground from './styles/HomeBackground'
import Hero from './styles/Hero'
import Footer from './styles/Footer'

const Home = () => (
  <HomeBackground>
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
  </HomeBackground>
)

export default Home
