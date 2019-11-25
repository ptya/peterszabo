import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from 'react-spring'

import SocialBtn from './styles/SocialBtn'
import SocialWrapper from './styles/SocialWrapper'

const AnimWrapper = animated(SocialWrapper)

const Social = ({ type }) => {
  const { x } = useSpring({
    from: { x: 55 },
    x: 0,
    delay: 300,
  })

  return (
    <AnimWrapper
      type={type}
      style={{
        transform: x.interpolate(
          n =>
            (type === 'row' && `translateY(${n}px)`) ||
            (type === 'col' && `translateX(-${n}px)`)
        ),
      }}
    >
      <SocialBtn
        social="gh"
        href="https://github.com/ptya"
        target="_blank"
        title="Follow on Github"
      >
        <span>Follow on Github</span>
      </SocialBtn>
      <SocialBtn
        social="fb"
        href="https://www.facebook.com/szabo.peter"
        target="_blank"
        title="Follow on Facebook"
      >
        <span>Follow on Facebook</span>
      </SocialBtn>
      <SocialBtn
        social="ig"
        href="https://www.instagram.com/szpeta"
        target="_blank"
        title="Follow on Instagram"
      >
        <span>Follow on Instagram</span>
      </SocialBtn>
      <SocialBtn
        social="li"
        href="https://www.linkedin.com/in/petersz/"
        target="_blank"
        title="Connect on Linkedin"
      >
        <span>Connect on Linkedin</span>
      </SocialBtn>
    </AnimWrapper>
  )
}
Social.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Social
