import React from 'react'
import { useSpring, animated } from 'react-spring'

import Success from './elements/Success'

import StyledConfirm from './styles/StyledConfirm'

const AnimatedConfirm = animated(StyledConfirm)

const Confirm = () => {
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    delay: 300,
  })
  return (
    <AnimatedConfirm style={fadeIn}>
      <Success />
      Thank you for your message!
    </AnimatedConfirm>
  )
}

export default Confirm
