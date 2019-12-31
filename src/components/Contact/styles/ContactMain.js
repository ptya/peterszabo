import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Main from 'components/styles/Main'
import Background from 'components/styles/Background'
import { device } from 'components/styles/variables'

const StyledMain = styled(Main)`
  margin-bottom: 4rem;

  p {
    position: relative;
    margin: 2.5rem 0 1rem;
    letter-spacing: 0.5px;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    margin-bottom: 2rem;

    p {
      margin: 3.8rem 1rem 2rem;
    }
  }

  @media screen and (${device.laptop}) {
    /* -> @media (min-width: 1024px)" */
    p {
      margin: 3.8rem 2.5rem 2rem;
    }
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
