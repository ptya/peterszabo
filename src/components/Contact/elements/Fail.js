import React from 'react'

import Cross from '../styles/Cross'

const Fail = () => (
  <Cross width="70" height="70" viewBox="0 0 70 70">
    <path
      d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M25,25 L24,26 L33,35 L24,44 L26,46 L35,37 L44,46 L46,44 L37,35 L46,26 L44,24 L35,33 L26,24 Z"
      id="failAnimationResult"
    />
    <circle
      id="failAnimationCircle"
      cx="35"
      cy="35"
      r="24"
      strokeWidth="3"
      strokeLinecap="round"
      fill="transparent"
    />
    <line
      id="failAnimationCross1"
      x1="25"
      y1="25"
      x2="45"
      y2="45"
      strokeWidth="3"
      fill="transparent"
    />
    <line
      id="failAnimationCross2"
      x1="45"
      y1="25"
      x2="25"
      y2="45"
      strokeWidth="3"
      fill="transparent"
    />
  </Cross>
)

export default Fail
