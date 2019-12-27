import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Main from 'components/styles/Main'

import Background from 'components/styles/Background'

const StyledMain = styled(Main)`
  p {
    position: relative;
    margin: 3.8rem 2.5rem 2rem;
    letter-spacing: 0.5px;
  }
`

const ContactMain = ({ children }) => (
  <StyledMain>
    <Background />
    {children}
  </StyledMain>
)

ContactMain.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ContactMain
