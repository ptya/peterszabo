import React from 'react'
import { animated } from 'react-spring'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// local elements
import Success from './elements/Success'

// local styles
import StyledConfirm from './styles/StyledConfirm'

const AnimatedConfirm = animated(StyledConfirm)

const Confirm = () => {
  const fadeIn = useFadeIn({ delay: 300 })

  return (
    <AnimatedConfirm style={fadeIn}>
      <Success />
      Thank you for your message!
    </AnimatedConfirm>
  )
}

export default Confirm
