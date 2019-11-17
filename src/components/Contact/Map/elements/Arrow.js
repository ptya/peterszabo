import React from 'react'

import StyledArrow from '../styles/StyledArrow'

const Arrow = () => (
  <StyledArrow viewBox="0 0 49 29">
    <path d="M24.5 1l21.218 20.25H3.282L24.5 1z" fill="#004DAA" />
    <path
      className="edges"
      d="M9.232 19.235L26.178 2.289m13.536 16.94L22.768 2.285"
      stroke="#004DAA"
      strokeWidth="5"
    />
  </StyledArrow>
)

export default Arrow
