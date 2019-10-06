import React from 'react'

import SocialBtn from './styles/SocialBtn.js'
import SocialWrapper from './styles/SocialWrapper.js'

const Social = () => (
  <SocialWrapper>
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
  </SocialWrapper>
)

export default Social
