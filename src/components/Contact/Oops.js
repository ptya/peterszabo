import React from 'react'
import { useSpring, animated } from 'react-spring'

import Fail from './elements/Fail'

import StyledOops from './styles/StyledOops'

const AnimatedOops = animated(StyledOops)

const Oops = () => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    delay: 300,
  })
  return (
    <>
      <AnimatedOops className="oops" style={fadeIn}>
        <Fail />
        Oops! These are not the droids you're looking for.
      </AnimatedOops>
      <animated.p className="oops" style={fadeIn}>
        In the meantime send an email to{' '}
        <a
          href="mailto:contact@peterszabo.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          contact@peterszabo.io
        </a>{' '}
        so I can find them for you.
      </animated.p>
    </>
  )
}

export default Oops
