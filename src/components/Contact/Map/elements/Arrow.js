import React from 'react'
import PropTypes from 'prop-types'
import StyledArrow from '../styles/StyledArrow'

const Arrow = ({ children }) => (
  <>
    <StyledArrow viewBox="0 -27 49 48">
      <path d="M24.5 1l21.218 20.25H3.282L24.5 1z" fill="#004DAA" />
      <path
        className="edges"
        d="M9.232 19.235L26.178 2.289m13.536 16.94L22.768 2.285"
        stroke="#004DAA"
        strokeWidth="5"
      />
    </StyledArrow>
    <span style={{ position: 'absolute', left: '-9999em' }}>{children}</span>
  </>
)

Arrow.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Arrow
