import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import fullLogo from 'assets/images/logo-full.png'
import logo from 'assets/images/logo.png'

import { device } from 'components/styles/variables'

const StyledLogo = styled.img`
  height: 8.2rem;

  @media ${device.mobileS} {
    /* -> @media (max-width: 320px)" */
    height: 5rem;
  }
`
// TODO check eslint warnings/errors for whole project
// TODO do i need full logo?
const Logo = ({ isFull }) => (
  <Link to="/">
    {/* <StyledLogo src={isFull ? fullLogo : logo} alt="Peter Szabo" /> */}
    <StyledLogo src={logo} alt="Peter Szabo" />
  </Link>
)

Logo.propTypes = {
  isFull: PropTypes.bool.isRequired,
}

export default Logo
