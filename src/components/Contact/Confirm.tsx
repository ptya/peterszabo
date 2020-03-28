import React from 'react'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// local elements
import Success from './elements/Success'

// local styles
import { AnimatedConfirm } from './styles/StyledConfirm'

const Confirm: React.FC = () => {
  const fadeIn = useFadeIn({ delay: 300 })

  return (
    <AnimatedConfirm style={fadeIn}>
      <Success />
      Thank you for your message!
    </AnimatedConfirm>
  )
}

export default Confirm
