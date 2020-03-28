import React from 'react'
import { animated } from 'react-spring'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// local elements
import Fail from './elements/Fail'

// local styles
import { AnimatedOops } from './styles/StyledOops'

const Oops: React.FC = () => {
  const fadeIn = useFadeIn({ delay: 300 })

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
