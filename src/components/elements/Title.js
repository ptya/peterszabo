import React, { useRef } from 'react'
import { useSpring, useChain, animated } from 'react-spring'
import PropTypes from 'prop-types'
import StyledTitle from '../styles/StyledTitle'
import { AnimBgLeft, AnimBgRight } from '../styles/AnimBg'

const Title = ({ children }) => {
  const textRef = useRef()
  const bgLeftRef = useRef()
  const bgRightRef = useRef()

  const { width: lWidth } = useSpring({
    from: {
      width: 0,
    },
    width: 115,
    config: {
      mass: 1,
      tension: 280,
      friction: 30,
    },
    ref: bgLeftRef,
  })

  const { width: rWidth } = useSpring({
    from: {
      width: 0,
    },
    width: 115,
    config: {
      mass: 1,
      tension: 280,
      friction: 30,
    },
    ref: bgRightRef,
  })

  const animation = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
    ref: textRef,
  })

  useChain([bgLeftRef, bgRightRef, textRef], [0, 0.15, 0.3])

  return (
    <StyledTitle>
      <animated.span style={animation}>{children}</animated.span>
      <AnimBgLeft style={{ width: lWidth.interpolate(w => `${w}%`) }} />
      <AnimBgRight style={{ width: rWidth.interpolate(w => `${w}%`) }} />
    </StyledTitle>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Title
