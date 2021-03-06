import React from 'react'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// shared elements
import Social from 'components/elements/Social'

// local styles
import HomeBackground from './styles/HomeBackground'
import { AnimatedHero } from './styles/Hero'
import { AnimatedFooter } from './styles/Footer'

// TODO integrate sentry.io
// TODO try logrocket as wellgat

const Home: React.FC = () => {
  const fadeIn = useFadeIn({})
  return (
    <HomeBackground>
      <AnimatedHero style={fadeIn}>
        <h1>
          Hello,
          <br /> I’m Péter Szabó,
          <br /> I create websites.
        </h1>
        <h2>Front End Developer / React / Gatsby</h2>
      </AnimatedHero>
      <AnimatedFooter style={fadeIn}>
        <h3>Where to find me</h3>
        <Social type="row" />
      </AnimatedFooter>
    </HomeBackground>
  )
}

export default Home
