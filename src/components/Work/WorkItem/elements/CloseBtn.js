import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import AccessibleText from 'components/styles/AccessibleText'
import { animated, useSpring, useChain } from 'react-spring'

import { AnimBgLeft, AnimBgRight } from 'components/styles/AnimBg'
import Wrapper from 'components/styles/Wrapper'
import StyledButton from '../styles/StyledButton'
import AnimBtnBg from '../styles/AnimBtnBg'

const AnimSvg = animated(StyledButton)

const CloseBtn = ({ children }) => {
  const svgRef = useRef()
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
    width: 100,
    config: {
      // a bit more solid than normal
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
    ref: svgRef,
  })

  // useChain([bgRightRef, bgLeftRef, svgRef], [0.15, 0.3, 0.5])
  useChain([bgRightRef, svgRef], [0.4, 0.6])
  return (
    <>
      <Wrapper>
        {/* <AnimBgLeft style={{ width: lWidth.interpolate(w => `${w}%`) }} /> */}
        <AnimBtnBg style={{ width: rWidth.interpolate(w => `${w}%`) }} />
        <AnimSvg style={animation} viewBox="0 0 60 60">
          <line
            x1="3"
            y1="30"
            x2="57"
            y2="30"
            className="line one"
            transform="rotate(45 30 30)"
          />
          <line
            x1="3"
            y1="30"
            x2="57"
            y2="30"
            className="line two"
            transform="rotate(-45 30 30)"
          />
        </AnimSvg>
      </Wrapper>
      <AccessibleText>{children}</AccessibleText>
    </>
  )
}
CloseBtn.propTypes = {
  children: PropTypes.any.isRequired,
}

export default CloseBtn
