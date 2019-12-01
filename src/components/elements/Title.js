import React, { useRef } from 'react'
import { useSpring, useChain, animated } from 'react-spring'
import PropTypes from 'prop-types'
import StyledTitleWrapper from '../styles/StyledTitleWrapper'
import StyledTitle from '../styles/StyledTitle'
import { AnimBgLeft, AnimBgRight } from '../styles/AnimBg'

const AnimatedTitle = animated(StyledTitle)

const Title = ({ children, type, className }) => {
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
      friction: 40,
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
      friction: 40,
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

  useChain([bgLeftRef, bgRightRef, textRef], [0, 0.15, 0.4])

  return (
    <StyledTitleWrapper className={className}>
      <AnimBgLeft style={{ width: lWidth.interpolate(w => `${w}%`) }} />
      <AnimBgRight style={{ width: rWidth.interpolate(w => `${w}%`) }} />
      <AnimatedTitle as={type} style={animation}>
        {children}
      </AnimatedTitle>
    </StyledTitleWrapper>
  )
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
}

Title.defaultPropTypes = {
  type: 'h1',
  className: '',
}

export default Title
