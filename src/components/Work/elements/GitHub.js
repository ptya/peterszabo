import React from 'react'

import GitHubText from 'assets/images/GitHub_Logo_White.png'
import GitHubLink from '../styles/GitHubLink'

const GitHub = () => (
  <GitHubLink href="https://github.com/ptya">
    <i />
    <img src={GitHubText} alt="GitHub" />
  </GitHubLink>
)

export default GitHub
