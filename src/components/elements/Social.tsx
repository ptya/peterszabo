import React from 'react'
import { useSpring } from 'react-spring'

import SocialBtn from '../styles/SocialBtn'
import { AnimatedSocialWrapper } from '../styles/SocialWrapper'

type Props = {
  type: 'row' | 'col'
  animate?: boolean
}

const Social: React.FC<Props> = ({ type, animate = true }) => {
  const { x } = useSpring({
    from: { x: animate ? 65 : 0 },
    x: 0,
    delay: animate ? 300 : 0,
  })

  return (
    <AnimatedSocialWrapper
      type={type}
      style={{
        transform: x.interpolate(
          n => (type === 'row' && `translateY(${n}px)`) || (type === 'col' && `translateX(-${n}px)`)
        ),
      }}
    >
      <SocialBtn
        social="gh"
        href="https://github.com/ptya"
        target="_blank"
        rel="noopener"
        title="Follow on Github"
        type={type}
      >
        <span>Follow on Github</span>
      </SocialBtn>
      <SocialBtn
        social="fb"
        href="https://www.facebook.com/szabo.peter"
        target="_blank"
        rel="noopener"
        title="Follow on Facebook"
        type={type}
      >
        <span>Follow on Facebook</span>
      </SocialBtn>
      <SocialBtn
        social="ig"
        href="https://www.instagram.com/szpeta"
        target="_blank"
        rel="noopener"
        title="Follow on Instagram"
        type={type}
      >
        <span>Follow on Instagram</span>
      </SocialBtn>
      <SocialBtn
        social="li"
        href="https://www.linkedin.com/in/petersz/"
        target="_blank"
        rel="noopener"
        title="Connect on Linkedin"
        type={type}
      >
        <span>Connect on Linkedin</span>
      </SocialBtn>
    </AnimatedSocialWrapper>
  )
}

export default Social
