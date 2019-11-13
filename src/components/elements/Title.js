import React, { useRef } from 'react'
import { useSpring, useChain, animated } from 'react-spring'
import PropTypes from 'prop-types'
import StyledTitle from '../styles/StyledTitle'
import { AnimBgLeft, AnimBgRight } from '../styles/AnimBg'

const Title = ({ children }) => {
  const textRef = useRef()
  const bgRef = useRef()

  const { width } = useSpring({
    from: {
      width: 0,
    },
    width: 115,
    config: {
      mass: 1,
      tension: 280,
      friction: 30,
    },
    ref: bgRef,
  })

  const animation = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    ref: textRef,
  })

  useChain([bgRef, textRef], [0, 0.4])

  return (
    <StyledTitle>
      <animated.span style={animation}>{children}</animated.span>
      <AnimBgLeft style={{ width: width.interpolate(w => `${w}%`) }} />
      <AnimBgRight style={{ width: width.interpolate(w => `${w}%`) }} />
    </StyledTitle>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
