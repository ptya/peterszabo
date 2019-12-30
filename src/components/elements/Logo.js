import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import fullLogo from 'assets/images/logo-full.png'
import logo from 'assets/images/logo.png'

import { device } from 'components/styles/variables'

const StyledLogo = styled.img`
  height: 5rem;

  @media screen and (${device.mobileM}) {
    /* -> @media (min-width: 375px)" */
    height: 6rem;
  }

  @media screen and (${device.tablet}) {
    /* -> @media (min-width: 768px)" */
    height: 8.2rem;
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
