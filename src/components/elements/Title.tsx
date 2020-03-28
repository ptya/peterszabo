import React, { useRef } from 'react'
import { useSpring, useChain, ReactSpringHook } from 'react-spring'

// local styles
import StyledTitleWrapper from '../styles/StyledTitleWrapper'
import { AnimatedTitle } from '../styles/StyledTitle'
import { AnimBgLeft, AnimBgRight } from '../styles/AnimBg'

type Props = {
  type?: 'h1' | 'h2' | 'h3' | 'h4',
  className?: string,
  animate?: boolean,
}

const Title: React.FC<Props> = ({ children, type = 'h1', className = '', animate = true }) => {
  const textRef = useRef<ReactSpringHook>(null)
  const bgLeftRef = useRef<ReactSpringHook>(null)
  const bgRightRef = useRef<ReactSpringHook>(null)

  const { width: lWidth } = useSpring({
    from: {
      width: animate ? 0 : 115,
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
      width: animate ? 0 : 115,
    },
    width: 115,
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
      opacity: animate ? 0 : 1,
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



export default Title
