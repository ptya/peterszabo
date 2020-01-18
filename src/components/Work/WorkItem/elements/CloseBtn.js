import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring, useChain } from 'react-spring'

// hooks
import { useFadeIn } from 'components/hooks/useSpring'

// shared styles
import AccessibleText from 'components/styles/AccessibleText'
import { colors } from 'components/styles/variables'

// local styles
import BtnWrapper from '../styles/BtnWrapper'
import StyledButton from '../styles/StyledButton'
import AnimBtnBg from '../styles/AnimBtnBg'

const AnimSvg = animated(StyledButton)

const CloseBtn = ({ children }) => {
  const svgRef = useRef()
  const bgRef = useRef()

  const { width, color } = useSpring({
    from: {
      width: 0,
      color: colors.darkBg,
    },
    width: 100,
    color: colors.bgGrey,
    config: {
      // a bit more solid than normal
      mass: 1,
      tension: 280,
      friction: 40,
    },
    ref: bgRef,
  })

  const fadeIn = useFadeIn({ ref: svgRef })

  useChain([bgRef, svgRef], [0.4, 0.6])
  return (
    <>
      <BtnWrapper>
        <AnimBtnBg
          style={{ width: width.interpolate(w => `${w}%`), borderColor: color }}
        />
        <AnimSvg style={fadeIn} viewBox="0 0 60 60">
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
      </BtnWrapper>
      <AccessibleText>{children}</AccessibleText>
    </>
  )
}
CloseBtn.propTypes = {
  children: PropTypes.any.isRequired,
}

export default CloseBtn
